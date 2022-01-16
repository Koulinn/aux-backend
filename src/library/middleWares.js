import utils from './utils.js'

const { createError, checkBodyForInjection } = utils

const bodySQLPrevention = (req, res, next) => {
  const isInvalid = checkBodyForInjection(req.body)
  if (isInvalid) {
    next()
    createError(403, 'Body invalid')
  } else {
    next()
  }
}

const middleWares = {
  bodySQLPrevention,
}

export default middleWares
