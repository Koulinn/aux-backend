import account_queries from '../../src/server/services/account/query_handlers.js'
import lib from '../../src/library/index.js'

const {
  utils: { readQuery },
} = lib

const { createAccountWithEmailAndPasswordQuery } = account_queries

const testCreateAccountWithEmailAndPassword = async () => {
  const body = {
    email_primary: 'testy@mail.com',
    password: '123456',
    accepted_terms: true,
    account_type: 'candidate',
  }
  const query = await createAccountWithEmailAndPasswordQuery(body)
  const DBres = await readQuery(query)
  const { acc_id } = DBres[0][0]

  expect(typeof acc_id === 'string').toBe(true)
}

const DBTestsHandlers = { testCreateAccountWithEmailAndPassword }

export default DBTestsHandlers
