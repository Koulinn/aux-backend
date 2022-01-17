import express from 'express'
import accountHandlers from './account_handlers.js'
import lib from '../../../library/index.js'

const {
  middleWares: { bodySQLPrevention },
} = lib

const { create } = accountHandlers

const router = express.Router()

router.route('/').post(bodySQLPrevention, create)

export default router
