import authentication from '../../../authentication/index.js'
import lib from '../../../library/index.js'

const {
  authUtils: { hashPassword },
} = authentication

const {
  queryHandlers: { generateTableStrings },
  utils: { genTempToken },
} = lib

const createAccountWithEmailAndPasswordQuery = async (body) => {
  const { email_primary, password, accepted_terms, account_type } = body
  const hashedPassword = await hashPassword(password)
  const accountToken = genTempToken()

  return `
        INSERT INTO accounts (
            email_primary, 
            password, 
            accepted_terms, 
            account_type,
            account_confirmation_token,
            account_confirmation_expirartion
        ) VALUES (
            '${email_primary}', 
            '${hashedPassword}', 
            ${accepted_terms}, 
            '${account_type}',
            '${accountToken}',
            (NOW() + '1 day'::interval)
        ) 
        RETURNING 
             acc_id,
             email_primary,
             account_confirmation_token
      ;`
}

const createUserQuery = (acc_id, personalInfo) => {
  const { tableKeys, tableValues } = generateTableStrings(personalInfo)

  return `
        INSERT INTO users (
            ${tableKeys},
            acc_id
        ) VALUES (
            ${tableValues}, 
            '${acc_id}') 
        RETURNING 
            acc_id
      ;`
}

const getAccountQuery = (identifier, value) => {
  return `
        SELECT
            acc_id, 
            password 
        FROM
            accounts
        WHERE
            ${identifier}='${value}'
        ;`
}

const updatePasswordQuery = async (acc_id, password) => {
  const hashedPassword = await hashPassword(password)
  return `
          UPDATE accounts
          SET password ='${hashedPassword}' 
          WHERE acc_id ='${acc_id}'
    ;`
}

const addPasswordResetTokenQuery = (email, resetToken) => {
  return `
          UPDATE accounts
          SET 
            password_reset_token ='${resetToken}',
            password_reset_expiration= (NOW() + '15 minutes'::interval)
          WHERE email_primary ='${email}'
          RETURNING email_primary
    ;`
}

const updatePasswordRecoveredQuery = async (password, password_reset_token) => {
  const hashedPassword = await hashPassword(password)
  return `
          UPDATE accounts
          SET 
            password ='${hashedPassword}',
            password_reset_expiration = null,
            password_reset_token = null
          WHERE 
            password_reset_token ='${password_reset_token}'
          AND
            password_reset_expiration > NOW()
    ;`
}

const emailConfirmationQuery = (token) => {
  return `
          UPDATE accounts
          SET 
            account_confirmation_expirartion = null,
            account_confirmation_token = null,
            confirmed_acc = true
          WHERE 
            account_confirmation_token ='${token}'
    ;`
}

const queryHandlers = {
  createAccountWithEmailAndPasswordQuery,
  createUserQuery,
  getAccountQuery,
  updatePasswordQuery,
  addPasswordResetTokenQuery,
  updatePasswordRecoveredQuery,
  emailConfirmationQuery,
}
export default queryHandlers
