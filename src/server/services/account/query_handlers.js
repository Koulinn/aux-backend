const createAccountWithEmailAndPasswordQuery = (body) => {
  const { email_primary, password, accepted_terms } = body
  return `INSERT INTO accounts (email_primary, password, accepted_terms) VALUES ('${email_primary}', '${password}', ${accepted_terms}) RETURNING acc_id;`
}

const query_handlers = {
  createAccountWithEmailAndPasswordQuery,
}
export default query_handlers
