import accountQueryHandlers from './query_handlers.js'
import lib from '../../../library/index.js'
import authUtils from '../../../authentication/auth_utils.js'
import randomstring from 'randomstring'

const {
  utils: { readQuery },
} = lib

const { validatePassword } = authUtils

const { getAccountQuery } = accountQueryHandlers

const setTokensCookie = (res, authToken, cookieName) => {
  res.cookie(cookieName, `Bearer ${authToken}`, {
    maxAge: 900000,
    httpOnly: true,
    sameSite: false,
  })
}

const genResetToken = () => {
  const token = randomstring.generate({
    length: 20,
    charset: 'alphabetic',
  })

  return token
}

const validateAccount = async (email, password) => {
  try {
    const query = getAccountQuery('email_primary', email)

    const res = await readQuery(query)
    if (res[0].length === 0) {
      return { status: 'notFound', acc_id: null }
    } else {
      const { acc_id } = res[0][0]
      const hashedPassword = res[0][0].password

      const isCorrectPassword = await validatePassword(password, hashedPassword)
      if (isCorrectPassword) {
        return { status: 'success', acc_id }
      } else {
        return { status: 'wrongPassword', acc_id: null }
      }
    }
  } catch (error) {
    console.log(error, 'From validateAccount')
  }
}

const utils = {
  setTokensCookie,
  validateAccount,
  genResetToken,
}

export default utils
