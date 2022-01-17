import account_queries from '../../src/server/services/account/query_handlers.js'
import lib from '../../src/library/index.js'

const {
  utils: { readQuery },
} = lib

const { createAccountWithEmailAndPasswordQuery } = account_queries

const testCreateAccountWithEmailAndPassword = async (body, toBe) => {
  const query = createAccountWithEmailAndPasswordQuery(body)
  const DBres = await readQuery(query)
  const { acc_id } = DBres[0][0]

  expect(typeof acc_id === 'string').toBe(true)
}

const DBTestsHandlers = { testCreateAccountWithEmailAndPassword }

export default DBTestsHandlers
