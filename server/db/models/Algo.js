const Sequelize = require('sequelize')
const db = require('../db')

const Algo = db.define('algos', {
  name: {
    type: Sequelize.STRING
  },
  prompt: {
    type: Sequelize.TEXT
  },
  examples: {
    type: Sequelize.TEXT
  },
  defaultText: {
    type: Sequelize.TEXT
  },
  tests: {
    type: Sequelize.TEXT
  },
  solution: {
    type: Sequelize.TEXT
  },
  algoLevel: {
    type: Sequelize.INTEGER,
    validation: {
      min: 1,
      max: 3
    }
  }
})

module.exports = Algo
