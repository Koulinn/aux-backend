import utils from './utils.js'

const { createError, bodyHasSQLInjection } = utils

const bodySQLPrevention = (req, res, next) => {
  const isInvalid = bodyHasSQLInjection(req.body)
  if (isInvalid) {
    throw createError(400, 'Body invalid')
  } else {
    next()
  }
}

const middleWares = {
  bodySQLPrevention,
}

export default middleWares
