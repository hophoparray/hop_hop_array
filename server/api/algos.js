const router = require('express').Router()
const {Algo} = require('../db/models')
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
