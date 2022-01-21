import bcrypt from 'bcrypt'
import OAuthQueryHandlers from './queryHandlers.js'
import lib from '../library/index.js'

const {
  utils: { readQuery },
} = lib
const { createAccountWithOAuthQuery, searchOAuthAccountQuery } =
  OAuthQueryHandlers

const { hash, compare } = bcrypt

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

const authUtils = {
  hashPassword,
  validatePassword,
  isExistentOAuthAccount,
  createGoogleAccount,
}
export default authUtils
