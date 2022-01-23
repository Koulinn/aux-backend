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

const queryHandlers = {
  createAccountWithEmailAndPasswordQuery,
  createUserQuery,
}
export default queryHandlers
