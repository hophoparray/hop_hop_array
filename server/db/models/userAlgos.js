const Sequelize = require('sequelize')
const db = require('../db')

const userAlgos = db.define('userAlgos', {
  userSolution: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM('pass', 'fail', 'pending'),
    defaultValue: 'pending'
  }
})

module.exports = userAlgos
