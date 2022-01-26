import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import OAuthQueryHandlers from './queryHandlers.js'
import lib from '../library/index.js'
import globalOAuthValues from './global_Oauth_values.js'

const {
  utils: { readQuery, createError },
} = lib

const { JWT_AUTH_SECRET, JWT_REFRESH_SECRET, JWT_AUTH_EXP, JWT_REFRESH_EXP } =
  globalOAuthValues

const {
  createAccountWithOAuthQuery,
  searchOAuthAccountQuery,
  insertRefreshTokenQuery,
} = OAuthQueryHandlers

const { hash, compare } = bcrypt

const { sign, verify } = jwt

const hashPassword = async (password) => {
  try {
    const hashedPassword = await hash(password, 12)
    return hashedPassword
  } catch (error) {
    console.log(error, 'from hashPassword')
  }
}

const validatePassword = async (password, hashedPassword) => {
  return await compare(password, hashedPassword)
}

const isExistentOAuthAccount = async (profileId, strategy) => {
  try {
    const query = await searchOAuthAccountQuery(profileId, strategy)
    const DBres = await readQuery(query)
    const acc_id = DBres[0][0]

    return acc_id
  } catch (error) {
    return false
  }
}
const createGoogleAccount = async (profile) => {
  const accountData = {
    google_id: profile.id,
    account_type: 'candidate',
    accepted_terms: true,
    email_primary: profile.emails[0].value,
  }
  const query = await createAccountWithOAuthQuery(
    accountData,
    accountData.google_id,
    'google_id'
  )

  try {
    const res = await readQuery(query)

    return res[0][0]
  } catch (error) {
    console.log('Error at createGoogleAccount')
    return false
  }
}

const genRefreshToken = (accountId) => {
  const options = {
    expiresIn: JWT_REFRESH_EXP,
  }

  const res = sign({ acc_id: accountId }, JWT_REFRESH_SECRET, options)

  return res
}

const genAuthorizationToken = (accountId) => {
  const options = {
    expiresIn: 15,
    // expiresIn: JWT_AUTH_EXP,
  }

  const res = sign({ acc_id: accountId }, JWT_AUTH_SECRET, options)

  return res
}

const verifyAuthorizationToken = (token) => {
  try {
    const res = verify(token, JWT_AUTH_SECRET)

    return res
  } catch (error) {
    return error.name
  }
}

const verifyRefreshToken = (token) => {
  try {
    const res = verify(token, JWT_REFRESH_SECRET)
    return res
  } catch (error) {
    throw Error('Error from verifyRefreshToken ' + error)
  }
}

const saveRefreshToken = async (refreshToken, acc_id) => {
  try {
    const query = insertRefreshTokenQuery(refreshToken, acc_id)
    await readQuery(query)

    return true
  } catch (error) {
    throw Error('Error from saveRefreshToken ' + error)
  }
}

const validateAccess = async (req, res, next) => {
  try {
    const authToken = req.cookies.authToken.split(' ')[1]
    const tokenData = verifyAuthorizationToken(authToken)
    if (tokenData?.acc_id) {
      req.acc_id = tokenData.acc_id
      next()
    } else if (tokenData === 'TokenExpiredError') {
      next(createError(401, 'Expired Token'))
    } else if (tokenData === 'JsonWebTokenError') {
      next(createError(403, 'Invalid Token'))
    } else {
      next(createError(400, 'Invalid Token'))
    }
  } catch (error) {
    next(error)
  }
}

const generateTokens = async (acc_id) => {
  try {
    const authToken = genAuthorizationToken(acc_id)
    const refresh_token = genRefreshToken(acc_id)

    await saveRefreshToken(refresh_token, acc_id)

    return { authToken, refresh_token }
  } catch (error) {
    throw Error('Error from generate Tokens ' + error)
  }
}

const authUtils = {
  hashPassword,
  validatePassword,
  isExistentOAuthAccount,
  createGoogleAccount,
  genRefreshToken,
  genAuthorizationToken,
  verifyAuthorizationToken,
  verifyRefreshToken,
  saveRefreshToken,
  generateTokens,
  validateAccess,
}
export default authUtils
