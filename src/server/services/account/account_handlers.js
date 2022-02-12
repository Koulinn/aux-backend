import lib from '../../../library/index.js'
import accountUtils from './utils.js'
import authUtils from '../../../authentication/auth_utils.js'
import communications from '../../../communications/index.js'
import accountQueries from './query_handlers.js'

const {
  utils: { readQuery, createError, genTempToken },
} = lib

const { generateTokens } = authUtils

const { setTokensCookie, validateAccount } = accountUtils

const {
  createAccountWithEmailAndPasswordQuery,
  createUserQuery,
  updatePasswordQuery,
  addPasswordResetTokenQuery,
  updatePasswordRecoveredQuery,
  emailConfirmationQuery,
} = accountQueries

const {
  templates: { passwordResetEmail, confirmAccount },
  providers: { sendEmail },
} = communications

const createAccount = async (req, res, next) => {
  try {
    const query = await createAccountWithEmailAndPasswordQuery(req.body)
    const DB_res = await readQuery(query)
    const { acc_id, account_confirmation_token, email_primary } = DB_res[0][0]

    const { authToken, refresh_token } = await generateTokens(acc_id)

    setTokensCookie(res, authToken, 'authToken')
    setTokensCookie(res, refresh_token, 'refreshToken')

    const emailMsg = confirmAccount(email_primary, account_confirmation_token)

    await sendEmail(emailMsg)

    res.status(201).send({ success: true })
  } catch (error) {
    next(error)
  }
}

const createUser = async (acc_id, normalizedProfile) => {
  try {
    const query = await createUserQuery(acc_id, normalizedProfile)
    const DB_res = await readQuery(query)

    return DB_res[0][0].acc_id
  } catch (error) {
    console.log(error, 'From createUser')
  }
}

const redirect = (req, res, next) => {
  const { authToken, refresh_token } = req.user

  if (authToken && refresh_token) {
    setTokensCookie(res, authToken, 'authToken')
    setTokensCookie(res, refresh_token, 'refreshToken')

    res.redirect(`http://localhost:3000/dashboard`)
  } else {
    res.redirect(`http://localhost:3000/login`)
  }
}

const login = async (req, res, next) => {
  try {
    const { email_primary, password } = req.body
    const { status, acc_id } = await validateAccount(email_primary, password)

    if (status === 'success') {
      const { authToken, refresh_token } = await generateTokens(acc_id)
      setTokensCookie(res, authToken, 'authToken')
      setTokensCookie(res, refresh_token, 'refreshToken')

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

const getUser = async (req, res, next) => {
  try {
    res.status(200).send('inside getUser')
  } catch (error) {
    next(error)
  }
}

const newPassword = async (req, res, next) => {
  try {
    const { acc_id } = req
    const { password } = req.body

    const query = await updatePasswordQuery(acc_id, password)
    const DB_res = await readQuery(query)

    const isUpdated = DB_res[1].rowCount

    if (isUpdated) {
      res.status(200).send({ success: true })
    } else {
      next(createError(400, 'Password not updated'))
    }
  } catch (error) {
    next(error)
  }
}

const passwordRecovery = async (req, res, next) => {
  try {
    const { email_primary } = req.body

    const resetToken = genTempToken()

    const query = addPasswordResetTokenQuery(email_primary, resetToken)
    const DB_res = await readQuery(query)

    const isUpdated = DB_res[1].rowCount

    if (isUpdated) {
      const { email_primary } = DB_res[0][0]
      const emailMsg = passwordResetEmail(email_primary, resetToken)
      const isSent = await sendEmail(emailMsg)
      if (isSent) {
        res.status(200).send({ success: true })
      } else {
        next(createError(400, 'Email not sent'))
      }
    } else {
      next(createError(400, 'Account not found'))
    }
  } catch (error) {
    next(error)
  }
}

const newPasswordRecovered = async (req, res, next) => {
  try {
    const { token } = req.params

    const { password } = req.body

    const query = await updatePasswordRecoveredQuery(password, token)
    const DB_res = await readQuery(query)

    const isUpdated = DB_res[1].rowCount

    if (isUpdated) {
      res.status(200).send({ success: true })
    } else {
      res.status(400).send({ success: false, msg: 'Password not updated' })
    }
  } catch (error) {
    next(error)
  }
}
const emailConfirmation = async (req, res, next) => {
  try {
    const { token } = req.params

    const query = await emailConfirmationQuery(token)
    const DB_res = await readQuery(query)

    const isUpdated = DB_res[1].rowCount

    if (isUpdated) {
      res.status(200).send({ success: true })
    } else {
      res.status(400).send({ success: false, msg: 'Account not confirmed' })
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
  getUser,
  newPassword,
  passwordRecovery,
  newPasswordRecovered,
  emailConfirmation,
}

export default userHandlers
