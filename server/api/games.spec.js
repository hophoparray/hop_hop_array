const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Game = db.model('games')

describe('Game routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/games/', () => {
    const roundNum = 8

    beforeEach(() => {
      return Game.create({
        round: roundNum
      })
    })

    it('GET /api/games', async () => {
      const res = await request(app)
        .get('/api/games')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].round).to.be.equal(roundNum)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
