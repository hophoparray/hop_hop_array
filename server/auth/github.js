const passport = require('passport')
const router = require('express').Router()
const {User} = require('../db/models')
const GitHubStrategy = require('passport-github').Strategy
//const {process} = require('../../secrets')
module.exports = router

if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
  console.log('Github client ID / secret not found. Skipping Google OAuth.')
} else {
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK
      },
      function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({githubId: profile.id}, function(err, user) {
          return cb(err, user)
        })
      }
    )
  )

  router.get(
    '/',
    passport.authenticate('github', {scope: ['email', 'profile']})
  )

  router.get(
    '/callback',
    passport.authenticate('github', {
      successRedirect: '/home',
      failureRedirect: '/login'
    })
  )
}
