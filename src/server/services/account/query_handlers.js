const createAccountWithEmailAndPasswordQuery = (body) => {
  const { email_primary, password } = body
  return `INSERT INTO accounts (email_primary, password) VALUES ('${email_primary}', '${password}') RETURNING acc_id;`
}

const query_handlers = {
  createAccountWithEmailAndPasswordQuery,
}
export default query_handlers
