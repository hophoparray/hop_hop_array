/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Algo = db.model('algos')
const User = db.model('user')

describe('Algo routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/algos/', () => {
    const algoName = 'Unique Characters'
    const algoDefault =
      'function hasUniqueCharactersSet(str){ \n // } \n// DO NOT EDIT BELOW THIS LINE\n exports.hasUniqueCharactersSet = hasUniqueCharactersSet'
    const codysEmail = 'cody@puppybook.com'

    beforeEach(() => {
      return (
        Algo.create({
          name: algoName,
          defaultText: algoDefault
        }),
        User.create({
          email: codysEmail
        })
      )
    })

    it('GET /api/algos', async () => {
      const res = await request(app)
        .get('/api/algos')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(algoName)
      expect(res.body[0].defaultText).to.be.equal(algoDefault)
    })
  })
})
