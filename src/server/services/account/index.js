import express from 'express'
import lib from '../../../library/index.js'
import accountHandlers from './account_handlers.js'
import passport from 'passport'

const {
  middleWares: { bodySQLPrevention },
} = lib

const { createAccount, redirect, login } = accountHandlers

const router = express.Router()

router.route('/').post(bodySQLPrevention, createAccount)
router.route('/login').post(bodySQLPrevention, login)

router.route('/OAuth/google').get(
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
)
router.route('/OAuth/redirect').get(passport.authenticate('google'), redirect)

export default router
