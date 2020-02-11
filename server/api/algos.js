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
      where: {userId: req.user.id},
      raw: true
    })
    const findUser = await User.findOne({
      where: {
        id: req.user.id
      }
    })
    const response = {
      ...algo,
      userAlgo: userAlgo && userAlgo.solution,
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
        algoId: req.params.algoId
      })
      res.json(row)
    }
  } catch (error) {
    console.log('algofail post error', error)
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
        algoId: req.params.algoId
      })
    }

    let testCode = findAlgo.dataValues.tests
    // console.log('this is the testCode', testCode)

    // Create docker instance
    console.log('Beginning of post route')

    const myContainer = await docker.createContainer({
      Image: 'hop-hop-array/node-testrunner-app'
    })
    // Start container
    console.log('container starts')
    await myContainer.start()

    console.log('write file for test code')
    await dockerExec(myContainer, ['node', 'writeFile.js', 'test.js', testCode])

    console.log('write file for user code')
    const userCode = req.body.text
    await dockerExec(myContainer, [
      'node',
      'writeFile.js',
      'userCode.js',
      userCode
    ])

    let testResult
    try {
      testResult = await dockerExec(myContainer, [
        './node_modules/.bin/mocha',
        'test.js',
        '--reporter',
        'json'
      ])
    } catch (error) {
      // console.log('TESTS FAILED')
      // console.log(error.message)
      testResult = error.message
    }
    testResult = formatTestJson(testResult)
    console.log('TEST RESULTS:')
    // console.log(testResult)

    // Turn off docker container
    console.log('Stop')
    await myContainer.stop()
    console.log('Remove')
    await myContainer.remove()

    console.log('Done')
    res.json({testResult, newUserAlgo})
  } catch (error) {
    console.log('ERROR:', error)
    next(error)
  }
})

// The test result is JSON, but it has some random characters (for terminal colors)
function formatTestJson(testStr) {
  let firstCurlyIndex = testStr.indexOf('{')
  if (firstCurlyIndex > -1) {
    let fixedStr = testStr.slice(firstCurlyIndex)
    console.log('fixed string', fixedStr)
    return JSON.parse(fixedStr)
  }
  throw new Error('Formatting failed: ' + testStr)
}

async function dockerExec(container, command) {
  const exec = await container.exec({
    Cmd: command,
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
