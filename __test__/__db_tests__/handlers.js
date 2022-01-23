import account_queries from '../../src/server/services/account/query_handlers.js'
import lib from '../../src/library/index.js'
import accountHandlers from '../../src/server/services/account/account_handlers.js'

const {
  utils: { readQuery },
} = lib

const { createAccountWithEmailAndPasswordQuery } = account_queries

const { createUser } = accountHandlers

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
const testCreateUser = async () => {
  const body = {
    email_primary: 'testCreateUser@mail.com',
    password: '123456',
    accepted_terms: true,
    account_type: 'candidate',
  }
  const query = await createAccountWithEmailAndPasswordQuery(body)
  const DBres = await readQuery(query)
  const { acc_id } = DBres[0][0]

  const personalInfoMock = {
    first_name: 'FirstNameMock',
    last_name: 'LastNameMock',
    avatar: 'AvatarURLMock',
  }

  const userID = await createUser(acc_id, personalInfoMock)

  expect(typeof userID === 'string').toBe(true)
}

const DBTestsHandlers = {
  testCreateAccountWithEmailAndPassword,
  testCreateUser,
}

export default DBTestsHandlers
