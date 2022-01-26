const selectAccountQuery = (acc_id) => {
  return `
          SELECT 
              acc_id, 
              account_type, 
              email_primary,
              email_secondary, 
              google_id, 
              linkedin_id, 
              github_id, 
              phone_number_primary, 
              phone_number_secondary, 
              cep, 
              state, 
              city
          FROM accounts
          WHERE acc_id='${acc_id}'
        ;`
}

const queryHandlers = { selectAccountQuery }

export default queryHandlers
