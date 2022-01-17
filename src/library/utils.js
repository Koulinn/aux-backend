import sequelize from '../DB/db_config.js'

const createError = (status, msg) => {
  const err = {
    status: status,
    msg: msg,
  }
  throw err
}

const bodyHasSQLInjection = (body) => {
  for (const [key, value] of Object.entries(body)) {
    if (typeof value === 'string' && value.match(';')) {
      return true
    }
  }
  return false
}

const readQuery = async (query) => {
  try {
    const res = await sequelize.query(query)
    return res
  } catch (error) {
    return error
  }
}

const utils = {
  createError,
  bodyHasSQLInjection,
  readQuery,
}
export default utils
