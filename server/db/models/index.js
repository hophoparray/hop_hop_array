const User = require('./user')
const Algo = require('./Algo')
const userAlgos = require('./userAlgos')
const Game = require('./game')

User.belongsToMany(Algo, {through: userAlgos})
Algo.belongsToMany(User, {through: userAlgos})

Algo.hasMany(Game)
Game.hasMany(User)

module.exports = {
  User,
  Algo,
  userAlgos,
  Game
}
