const Sequelize = require('sequelize')
const db = require('../db')

const Game = db.define('games', {
  round: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Game
