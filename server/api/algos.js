const router = require('express').Router()
const {Algo, userAlgos, User} = require('../db/models')
const fs = require('fs') // for writing files
const {promisify} = require('util')
// For copying file into docker container
const {exec} = require('child_process')
// Docker setup
const Docker = require('dockerode')
const docker = new Docker({socketPath: '/var/run/docker.sock'})
const writeFileAsync = promisify(fs.writeFile)
const removeFileAsync = promisify(fs.unlink)
const execAsync = promisify(exec)

module.exports = router

//All Algos
router.get('/', async (req, res, next) => {
  try {
    const algos = await Algo.findAll()
    res.json(algos)
  } catch (error) {
    next(error)
  }
})

//Single Algo
router.get('/:algoId', async (req, res, next) => {
  const algoId = req.params.algoId
  try {
    const algo = await Algo.findOne({
      where: {id: algoId},
      raw: true
    })
    const userAlgo = await userAlgos.findOne({
      where: {userId: req.user.id, algoId: algoId},
      raw: true
    })
    const findUser = await User.findOne({
      where: {
        id: req.user.id
      }
    })
    // console.log(userAlgo, 'user algo')
    const response = {
      ...algo,
      userAlgo,
      findUser
    }
    res.json(response)
  } catch (error) {
    console.log('ERROR', error)
    next(error)
  }
})

//User Algo
router.get('/userAlgos/:userId', async (req, res, next) => {
  try {
    const data = await userAlgos.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.json(data)
  } catch (error) {
    next(error)
  }
})

// Update points
router.put('/algofail/:algoId', async (req, res, next) => {
  try {
    let userAlgo = await userAlgos.findOne({
      where: {
        userId: req.user.id,
        algoId: req.params.algoId
      }
    })

    if (userAlgo) {
      const [numOfAffectedRows, updatedUserAlgo] = await userAlgos.update(
        {
          status: 'fail'
        },
        {
          where: {
            userId: req.user.id,
            algoId: req.params.algoId
          },
          returning: true
        }
      )
      res.json('updated fail status')
    }
  } catch (error) {
    next(error)
  }
})

router.post('/algofail/:algoId', async (req, res, next) => {
  try {
    const row = await userAlgos.findOne({
      where: {
        userId: req.user.id,
        algoId: req.params.algoId
      }
    })
    if (!row) {
      await userAlgos.create({
        userId: req.user.id,
        algoId: req.params.algoId,
        userSolution: req.body.text
      })
      res.json(row)
    }
  } catch (error) {
    next(error)
  }
})

router.put('/:algoId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id)
    user.points = req.user.points + 50
    if (user.points >= 100 && user.points < 200) user.userLevel = 2
    if (user.points >= 200) user.userLevel = 3
    user.save()

    let userAlgo = await userAlgos.findOne({
      where: {
        userId: req.user.id,
        algoId: req.params.algoId
      }
    })

    if (userAlgo) {
      const [numOfAffectedRows, updatedUserAlgo] = await userAlgos.update(
        {
          status: 'pass'
        },
        {
          where: {
            userId: req.user.id,
            algoId: req.params.algoId
          },
          returning: true
        }
      )
      res.json({})
    } else {
      res.json({updatePoints})
    }
  } catch (error) {
    next(error)
  }
})

// Run user code
router.post('/:algoId', async (req, res, next) => {
  try {
    let findAlgo = await Algo.findOne({
      where: {
        id: req.params.algoId
      },
      attributes: ['tests']
    })
    const row = await userAlgos.findOne({
      where: {
        userId: req.user.id,
        algoId: req.params.algoId
      }
    })
    let newUserAlgo

    if (!row) {
      newUserAlgo = await userAlgos.create({
        userId: req.user.id,
        algoId: req.params.algoId,
        userSolution: req.body.text
      })
    }

    if (row) {
      await userAlgos.update(
        {
          userSolution: req.body.text
        },
        {
          where: {
            userId: req.user.id,
            algoId: req.params.algoId
          }
        }
      )
    }

    // Create docker instance
    const myContainer = await docker.createContainer({
      Image: 'hop-hop-array/node-testrunner-app'
    })

    // Start container
    await myContainer.start()

    // Write files for tests and usercode in docker
    const testCode = findAlgo.dataValues.tests
    await dockerExec(myContainer, ['node', 'writeFile.js', 'test.js', testCode])

    const userCode = req.body.text
    await dockerExec(myContainer, [
      'node',
      'writeFile.js',
      'userCode.js',
      userCode
    ])

    // Run tests
    let testResult
    try {
      testResult = await dockerExec(myContainer, [
        'timeout',
        '6',
        'npm',
        'test'
      ])
    } catch (error) {
      console.log('TESTS FAILED:', error.message)
    }
    testResult = formatTestResult(testResult)

    // Turn off docker container and remove
    await myContainer.stop()
    await myContainer.remove()

    //Sending results back
    res.json({...testResult})
  } catch (error) {
    next(error)
  }
})

// Formats the TestResult string to pass to front-end
function formatTestResult(testStr) {
  let firstIndexAll = testStr.indexOf('cat results.txt') + 29
  let firstIndexFails = testStr.indexOf('passing') - 2

  // Splits results into list of all tests + consolelogs && list of assertion errors
  if (firstIndexAll > 28 && firstIndexAll > -3) {
    let allStr = testStr.slice(firstIndexAll, firstIndexFails)
    let failsStr = testStr.slice(firstIndexFails)
    let allPassing = false
    if (!failsStr.includes('failing') && failsStr.includes('passing')) {
      allPassing = true
    }

    // Changes Output to if Error caught
    if (allStr.includes('ReferenceError:')) {
      const startI = allStr.indexOf('ReferenceError:')
      const endI = allStr.indexOf('at')
      allStr = allStr.slice(startI, endI)
      failsStr = ''
    }
    if (allStr.includes('SyntaxError:')) {
      const startI = allStr.indexOf('SyntaxError:')
      const endI = allStr.indexOf('at')
      allStr = allStr.slice(startI, endI)
      failsStr = ''
    }
    return {allTests: allStr, failsStatus: failsStr, allPassing}
  }
  throw new Error('Formatting failed: ' + testStr)
}

async function dockerExec(container, command) {
  const exec = await container.exec({
    Cmd: command,
    Tty: false,
    AttachStdout: true,
    AttachStderr: true
  })

  // Run exec and convert output stream into a string
  const commandOutput = await new Promise((resolve, reject) => {
    exec.start(async (err, stream) => {
      if (err) return reject(err)
      let message = ''
      stream.on('data', data => (message += data.toString()))
      stream.on('end', () => resolve(message))
    })
  })

  // Get the exit code for the command (0 === success)
  const {ExitCode} = await exec.inspect()
  if (ExitCode !== 0) {
    throw new Error(commandOutput)
  }
  return commandOutput
}
