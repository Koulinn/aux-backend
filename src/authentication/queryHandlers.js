const createAccountWithOAuthQuery = async (
  accountData,
  OauthId,
  strategyAccount
) => {
  const { email_primary, accepted_terms, account_type } = accountData

  return `
        INSERT INTO accounts (
            email_primary, 
            ${strategyAccount}, 
            accepted_terms, 
            account_type
        ) VALUES (
            '${email_primary}', 
            '${OauthId}', 
            ${accepted_terms}, 
            '${account_type}') 
        RETURNING 
             acc_id
      ;`
}

const searchOAuthAccountQuery = async (OauthId, strategy) => {
  return `
        SELECT acc_id 
        FROM accounts
        WHERE ${strategy} ='${OauthId}';`
}

const queryHandler = {
  createAccountWithOAuthQuery,
  searchOAuthAccountQuery,
}

export default queryHandler
