import utils from './utils.js'

const { createError, bodyHasSQLInjection } = utils

const bodySQLPrevention = (req, res, next) => {
  const isInvalid = bodyHasSQLInjection(req.body)
  if (isInvalid) {
    createError(403, 'Body invalid')
    next()
  } else {
    next()
  }
}

const middleWares = {
  bodySQLPrevention,
}

export default middleWares
