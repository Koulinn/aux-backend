import lib from '../../src/library/index.js'

const {
  utils: { bodyHasSQLInjection },
} = lib

const testSQLInjection = (body, toBe) => {
  const isValid = bodyHasSQLInjection(body)
  expect(isValid).toBe(toBe)
}

const testingSQLHandlers = {
  testSQLInjection,
}

export default testingSQLHandlers
