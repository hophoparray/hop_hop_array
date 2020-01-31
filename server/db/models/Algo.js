const Sequelize = require('sequelize')
const db = require('../db')

const Algo = db.define('algos', {
  prompt: {
    type: Sequelize.TEXT
  },
  examples: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  defaultText: {
    type: Sequelize.TEXT
  },
  tests: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
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
