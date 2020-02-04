const passport = require('passport')
const router = require('express').Router()
const {User} = require('../db/models')
const GitHubStrategy = require('passport-github').Strategy

module.exports = router

if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
  console.log('Github client ID / secret not found. Skipping Google OAuth.')
} else {
  const githubConfig = {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK
  }

  const strategy = new GitHubStrategy(githubConfig, function(
    accessToken,
    refreshToken,
    profile,
    done
  ) {
    const githubId = profile.id
    const email = profile.username
    const name = profile.displayName

    User.findOrCreate({
      where: {githubId},
      defaults: {email, name}
    })
      .then(([user]) => done(null, user))
      .catch(done)
  })

  passport.use(strategy)

  router.get(
    '/',
    passport.authenticate('github', {scope: ['email', 'profile']})
  )

  router.get(
    '/verify',
    passport.authenticate('github', {
      successRedirect: '/home',
      failureRedirect: '/login'
    })
  )
}
