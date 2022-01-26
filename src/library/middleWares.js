import utils from './utils.js'
import mwQueryHandlers from './query_handlers.js'

const { createError, bodyHasSQLInjection, readQuery } = utils

const { selectAccountQuery } = mwQueryHandlers

const bodySQLPrevention = (req, res, next) => {
  const isInvalid = bodyHasSQLInjection(req.body)
  if (isInvalid) {
    throw createError(400, 'Body invalid')
  } else {
    next()
  }
}

const validateAccount = async (req, res, next) => {
  try {
    if (!req.acc_id) {
      next(createError(404, 'Account not found'))
    } else {
      const query = selectAccountQuery(req.acc_id)
      const DB_res = await readQuery(query)

      if (DB_res[0].length === 0) {
        next(createError(401, 'Account not found'))
      } else {
        req.account = DB_res[0][0]
        next()
      }
    }
  } catch (error) {
    next(error)
  }
}

const middleWares = {
  bodySQLPrevention,
  validateAccount,
}

export default middleWares
