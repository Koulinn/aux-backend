import lib from '../../src/library/index.js'

const {
  utils: { bodyHasSQLInjection },
} = lib

const testSQLInjection = (body, toBe) => {
  const isValid = bodyHasSQLInjection(body)
  expect(isValid).toBe(toBe)
}
const testCreateUser = async (acc_id, body, expect) => {}

const testingSQLHandlers = {
  testSQLInjection,
  testCreateUser,
}

export default testingSQLHandlers
