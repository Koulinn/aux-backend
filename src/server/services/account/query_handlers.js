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

const query_handlers = {
  createAccountWithEmailAndPasswordQuery,
}
export default query_handlers
