import express from 'express'
import lib from '../../../library/index.js'
import accountHandlers from './account_handlers.js'
import passport from 'passport'
import authUtils from '../../../authentication/auth_utils.js'

const {
  middleWares: { bodySQLPrevention, validateAccount },
} = lib

const { validateAccess } = authUtils

const {
  createAccount,
  redirect,
  login,
  getUser,
  newPassword,
  passwordRecovery,
} = accountHandlers

const router = express.Router()

router.route('/').post(bodySQLPrevention, createAccount)

router.route('/me').get(validateAccess, validateAccount, getUser)

router.route('/login').post(bodySQLPrevention, login)

router
  .route('/resetPassword')
  .put(bodySQLPrevention, validateAccess, validateAccount, newPassword)

router.route('/OAuth/google').get(
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
)

router.route('/OAuth/redirect').get(passport.authenticate('google'), redirect)

router.route('/passwordRecovery').put(bodySQLPrevention, passwordRecovery)

export default router
