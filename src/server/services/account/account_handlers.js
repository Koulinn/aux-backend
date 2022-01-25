import user_queries from './query_handlers.js'
import lib from '../../../library/index.js'
import accountUtils from './utils.js'
import authUtils from '../../../authentication/auth_utils.js'

const {
  utils: { readQuery, createError },
} = lib

const { generateTokens } = authUtils

const { setAuthCookie, validateAccount } = accountUtils

const { createAccountWithEmailAndPasswordQuery, createUserQuery } = user_queries

const createAccount = async (req, res, next) => {
  try {
    const query = await createAccountWithEmailAndPasswordQuery(req.body)
    const DB_res = await readQuery(query)
    const { acc_id } = DB_res[0][0]

    const { authToken } = await generateTokens(acc_id)

    setAuthCookie(res, authToken)

    res.status(201).send({ success: true })
  } catch (error) {
    next(error)
  }
}

const createUser = async (acc_id, profile) => {
  try {
    const personalInfo = {
      first_name: profile.name.givenName,
      last_name: profile.name.familyName,
      avatar: profile.photos[0].value,
    }
    const query = await createUserQuery(acc_id, personalInfo)
    const DB_res = await readQuery(query)

    return DB_res[0][0].acc_id
  } catch (error) {
    console.log(error, 'From createUser')
  }
}

const redirect = (req, res, next) => {
  const { authToken, refresh_token } = req.user

  if (authToken && refresh_token) {
    setAuthCookie(res, authToken)

    res.redirect(
      `http://localhost:3000/dashboard&?refresh_token=${refresh_token}`
    )
  } else {
    res.redirect(`http://localhost:3000/login`)
  }
}

const login = async (req, res, next) => {
  try {
    const { email_primary, password } = req.body
    const { status, acc_id } = await validateAccount(email_primary, password)

    if (status === 'success') {
      const { authToken } = await generateTokens(acc_id)
      await setAuthCookie(res, authToken)

      res.status(200).send({ success: true })
    } else if (status === 'wrongPassword') {
      next(createError(400, 'Wrong password'))
    } else {
      next(createError(404, 'Account not found'))
    }
  } catch (error) {
    next(error)
  }
}

const userHandlers = {
  createAccount,
  redirect,
  createUser,
  login,
}

export default userHandlers
