const User = require('./User')
const Algo = require('./Algo')
const userAlgos = require('./userAlgos')

User.belongsToMany(Algo, {through: userAlgos})
Algo.belongsToMany(User, {through: userAlgos})

module.exports = {
  User,
  Algo,
  userAlgos
}
