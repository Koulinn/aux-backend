import authentication from '../../../authentication/index.js'

const {
  authUtils: { hashPassword },
} = authentication

const createAccountWithEmailAndPasswordQuery = async (body) => {
  const { email_primary, password, accepted_terms, account_type } = body
  const hashedPassword = await hashPassword(password)
  return `
        INSERT INTO accounts (
            email_primary, 
            password, 
            accepted_terms, 
            account_type
        ) VALUES (
            '${email_primary}', 
            '${hashedPassword}', 
            ${accepted_terms}, 
            '${account_type}') 
        RETURNING 
             acc_id
      ;`
}

const createUserQuery = (acc_id, personalInfo) => {
  const { first_name, last_name, avatar } = personalInfo

  return `
        INSERT INTO users (
            first_name, 
            last_name, 
            avatar, 
            acc_id
        ) VALUES (
            '${first_name}', 
            '${last_name}', 
            '${avatar}', 
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

const queryHandlers = {
  createAccountWithEmailAndPasswordQuery,
  createUserQuery,
  getAccountQuery,
  updatePasswordQuery,
  addPasswordResetTokenQuery,
  updatePasswordRecoveredQuery,
}
export default queryHandlers
