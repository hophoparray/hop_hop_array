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

// TODO: Write Image

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
    const response = {
      ...algo,
      userAlgo: userAlgo && userAlgo.solution
    }
    res.json(response)
  } catch (error) {
    console.log('ERROR', error)
    next(error)
  }
})

const testCode = `const chai = require('chai');
const expect = chai.expect
const funcs = require("./userCode");

for (let key in funcs) {
  let func = funcs[key];

  describe('ch1-q3: ' + key, function() {

    it('works with null/undefined as input', function() {
      expect(func(undefined)).to.be.undefined;
      expect(func(null)).to.be.null;
    });

    it('works with an empty array as input', function() {
      expect(func([])).to.eql([]);
    });
}`

router.post('/:algoId', async (req, res, next) => {
  try {
    // Create docker instance
    const myContainer = await docker.createContainer({
      Image: 'hop-hop-array/node-testrunner-app'
    })
    // Start container
    await myContainer.start()

    const userCode = req.body.text
    // await copyStringToContainer(userCode, 'userCode.js', myContainer.id)
    // await copyStringToContainer(testCode, 'test.js', myContainer.id)

    await writeFileAsync('userCode.js', userCode)
    await myContainer.putArchive('userCode.js', {
      path: '/container/usr/src/app/'
    })
    await removeFileAsync('userCode.js')

    // Write user input to file in container
    // await execAsync(
    //   `docker exec ${myContainer.id} bash -c "echo '${userCode}' > userCode.js"`
    // )
    // TODO: Implement these next two commands
    // await execAsync(
    //   `(docker exec -i ${
    //     myContainer.id
    //   } bash -c "cat > test.js") < echo "${testCode
    //     .replace(/\"/g, `\"`)
    //     .replace(/\'/g, `\'`)}"`
    // )
    const {stdout} = await execAsync(
      `docker exec ${myContainer.id} bash -c "npm run mocha-test"`
    )
    console.log('STDOUT', stdout)

    // // write to a file
    // await writeFileAsync('tempUserCode.js', userCode)
    // await execAsync(
    //   'docker cp tempUserCode.js ' +
    //     myContainer.id +
    //     ':/usr/src/app/userCode.js'
    // )
    // await removeFileAsync('tempUserCode.js')

    // // Copy user file into container
    // //await myContainer.putArchive("usersCode.js", {path: "/usr/src/app/"})
    // console.log(ret)

    // // Exec test command and save text
    // console.log('Exec')
    // const output = await execAsync(
    //   'docker exec ' +
    //     myContainer.id +
    //     ` node run_tests_${req.params.algoId}.js`
    // )
    // console.log(output)

    // Turn off docker container
    // console.log('Stop')
    // await myContainer.stop()
    // console.log('Remove')
    // await myContainer.remove()

    console.log('Done')
    res.json({test: 'test'})
  } catch (error) {
    console.log('ERROR:', error)
    next(error)
  }
})

const copyStringToContainer = async (str, fileName, containerId) => {
  console.log('copy string to container', str, fileName, containerId)
  await writeFileAsync(fileName, str)
  console.log('written!')
  const cmd = `docker cp ./${fileName} ${containerId}:/usr/src/app/`
  console.log(cmd)
  await execAsync('docker cp userCode.js ' + containerId + ':/usr/src/app/')
  // await execAsync(`docker cp ./${fileName} ${containerId}:/usr/src/app/`)
  // const res = await execAsync(
  //   'docker cp ./${fileName} ${containerId}:/usr/src/app/'
  // )
  // console.log(res)
  console.log('copied!')
  await removeFileAsync(fileName)
  console.log('done!')
}
