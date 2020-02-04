const router = require('express').Router()
const {Algo, userAlgos} = require('../db/models')
const fs = require('fs') // for writing files
const {promisify} = require('util')
// For copying file into docker container
const {exec} = require('child_process')
// Docker setup
const Docker = require('dockerode')
const docker = new Docker({socketPath: '/var/run/docker.sock'})
const writeFileAsync = promisify(fs.writeFile)
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
    const selectedAlgo = await Algo.findOne({
      where: {id: algoId}
    })
    res.json(selectedAlgo)
  } catch (error) {
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

router.post('/:algoId', async (req, res, next) => {
  try {
    // Create docker instance
    const myContainer = await docker.createContainer({
      Image: 'hop-hop-array/node-testrunner-app'
    })
    // Start container
    await myContainer.start()

    // Write user input to file
    const usersCode = req.body.text
    // write to a file
    await writeFileAsync('usersCode.js', usersCode)

    // Get container id for copy file
    const containerInfo = await myContainer.inspect()

    // Copy user file into container
    //await myContainer.putArchive("usersCode.js", {path: "/usr/src/app/"})
    const ret = await execAsync(
      'docker cp usersCode.js ' + containerInfo.Id + ':/usr/src/app/'
    )
    console.log(ret)

    // Exec test command and save text
    console.log('Exec')
    const output = await execAsync(
      'docker exec ' +
        containerInfo.Id +
        ` node run_tests_{req.params.algoId}.js`
    )
    console.log(output)

    // Turn off docker container
    console.log('Stop')
    await myContainer.stop()
    console.log('Remove')
    await myContainer.remove()

    console.log('Done')
    res.json(output)
  } catch (error) {
    next(error)
  }
})
