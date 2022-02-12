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
            account_type,
            confirmed_acc
        ) VALUES (
            '${email_primary}', 
            '${OauthId}', 
            ${accepted_terms}, 
            '${account_type}',
            true 
        )
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

const insertRefreshTokenQuery = (refreshToken, acc_id) => {
  return `
        UPDATE accounts
        SET refresh_token ='${refreshToken}'
        WHERE acc_id = '${acc_id}'
        RETURNING refresh_token
      ;`
}

const queryHandler = {
  createAccountWithOAuthQuery,
  searchOAuthAccountQuery,
  insertRefreshTokenQuery,
}

export default queryHandler
