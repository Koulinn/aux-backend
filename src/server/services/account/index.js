import express from 'express'
import lib from '../../../library/index.js'
import accountHandlers from './account_handlers.js'
import passport from 'passport'

const {
  middleWares: { bodySQLPrevention },
} = lib

const { create } = accountHandlers

const router = express.Router()

router.route('/').post(bodySQLPrevention, create)
router.route('/OAuth/google').get(
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
)
router.route('/OAuth/redirect').get((req, res, next) => {
  // find user, put token and redirect
  res.cookie('cake_cookie', 'testValue')
  res.redirect('http://localhost:3000/')
})

export default router
