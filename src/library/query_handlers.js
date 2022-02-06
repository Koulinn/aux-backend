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

const generateTableStrings = (objToConvert) => {
  const propertyList = Object.entries(objToConvert)

  let unnormalizedTableKeys = ''
  let unnormalizedTableValues = ''

  propertyList.forEach((property) => {
    unnormalizedTableKeys += `${property[0]}, `

    if (typeof property[1] === 'string') {
      unnormalizedTableValues += `'${property[1]}', `
    } else {
      unnormalizedTableValues += `${property[1]}, `
    }
  })

  const tableKeys = unnormalizedTableKeys.substring(
    0,
    unnormalizedTableKeys.length - 2
  )

  const tableValues = unnormalizedTableValues.substring(
    0,
    unnormalizedTableValues.length - 2
  )
  return { tableKeys, tableValues }
}

const queryHandlers = { selectAccountQuery, generateTableStrings }

export default queryHandlers
