import express from 'express'
import candidateHandlers from './candidate_handlers.js'
import lib from '../../../library/index.js'

const {
  middleWares: { bodySQLPrevention },
} = lib

const { create } = candidateHandlers

const router = express.Router()

router.route('/').post(bodySQLPrevention, create)

export default router
