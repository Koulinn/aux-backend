import sequelize from '../DB/db_config.js'
import randomstring from 'randomstring'

const createError = (status, msg) => {
  const err = {
    status: status,
    msg: msg,
  }
  return err
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
    throw Error('Error from readQuery ' + error)
  }
}

const genTempToken = () => {
  const token = randomstring.generate({
    length: 20,
    charset: 'alphabetic',
  })

  return token
}

const utils = {
  createError,
  bodyHasSQLInjection,
  readQuery,
  genTempToken,
}
export default utils
