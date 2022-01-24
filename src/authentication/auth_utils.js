import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import OAuthQueryHandlers from './queryHandlers.js'
import lib from '../library/index.js'
import globalOAuthValues from './global_Oauth_values.js'

const {
  utils: { readQuery },
} = lib

const { JWT_AUTH_SECRET, JWT_REFRESH_SECRET, JWT_AUTH_EXP, JWT_REFRESH_EXP } =
  globalOAuthValues

const { createAccountWithOAuthQuery, searchOAuthAccountQuery } =
  OAuthQueryHandlers

const { hash, compare } = bcrypt

const { sign } = jwt

const hashPassword = async (password) => {
  try {
    const hashedPassword = await hash(password, 12)
    return hashedPassword
  } catch (error) {
    console.log(error, 'from hashPassword')
  }
}

const validatePassword = async (password) => {
  // const isCorrectPassword = await compare(password)
  try {
  } catch (error) {
    console.log(error, 'from hashPassword')
  }
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

const genRefreshToken = async (accountId) => {
  const options = {
    expiresIn: JWT_REFRESH_EXP,
  }

  const res = await sign({ acc_id: accountId }, JWT_REFRESH_SECRET, options)
  return res
}

const genAuthorizationToken = async (accountId) => {
  const options = {
    expiresIn: JWT_AUTH_EXP,
  }

  const res = await sign({ acc_id: accountId }, JWT_AUTH_SECRET, options)
  return res
}

const authUtils = {
  hashPassword,
  validatePassword,
  isExistentOAuthAccount,
  createGoogleAccount,
  genRefreshToken,
  genAuthorizationToken,
}
export default authUtils
