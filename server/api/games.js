const router = require('express').Router()
const {User, Algo, Game} = require('../db/models')
module.exports = router

//All Games
router.get('/', async (req, res, next) => {
  try {
    const allGames = await Game.findAll()
    res.json(allGames)
  } catch (error) {
    next(error)
  }
})

//Single Game
router.get('/:gameId', async (req, res, next) => {
  gameId = Number(req.params.gameId)
  try {
    const singleGame = await Game.findOne({
      where: {id: gameId},
      include: [{model: User, as: 'players'}]
    })
    res.json(singleGame)
  } catch (error) {
    next(error)
  }
})

//New Game
router.post('/', async (req, res, next) => {
  const algoId = req.body.algoId
  const userId = req.body.userId
  try {
    //creates new game
    const newGame = await Game.create({
      algoId: algoId
    })

    //updates users game ID
    const [numAffectedRows, user] = await User.update(
      {
        gameId: newGame.id
      },
      {
        where: {id: userId},
        returning: true
      }
    )

    res.json(newGame)
  } catch (error) {
    next(error)
  }
})
