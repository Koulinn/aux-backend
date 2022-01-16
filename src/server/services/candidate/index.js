import express from 'express'
import candidateHandlers from './candidate_handlers.js'

const { create } = candidateHandlers

const router = express.Router()

router.route('/').post(create)

export default router
