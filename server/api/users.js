const router = require('express').Router()
const {User, Algo} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/userId', async (req, res, next) => {
  const id = req.params.userId
  try {
    const singleUser = await User.findOne({
      where: {id: id},
      attributes: ['id', 'email']
    })
    res.json(singleUser)
  } catch (err) {
    next(err)
  }
})
