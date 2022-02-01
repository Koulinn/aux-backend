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
  newPasswordRecovered,
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

router.route('/OAuth/github').get(
  passport.authenticate('github', {
    scope: ['user:email'],
  })
)
router
  .route('/OAuth/google/redirect')
  .get(passport.authenticate('google'), redirect)

router
  .route('/OAuth/github/redirect')
  .get(passport.authenticate('github'), redirect)

router.route('/passwordRecovery').put(bodySQLPrevention, passwordRecovery)
router
  .route('/passwordRecovery/:token')
  .put(bodySQLPrevention, newPasswordRecovered)

export default router
