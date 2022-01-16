import lib from '../../src/library/index.js'

const {
  utils: { IsSQLQuery },
} = lib

const testSQLInjection = (body, toBe) => {
  const isValid = IsSQLQuery(body)
  expect(isValid).toBe(toBe)
}

const testingSQLHandlers = {
  testSQLInjection,
}

export default testingSQLHandlers
