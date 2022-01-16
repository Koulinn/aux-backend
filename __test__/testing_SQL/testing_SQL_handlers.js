import lib from '../../src/library/index.js'

const {
  utils: { checkBodyForInjection },
} = lib

const testSQLInjection = (body, toBe) => {
  const isValid = checkBodyForInjection(body)
  expect(isValid).toBe(toBe)
}

const testingSQLHandlers = {
  testSQLInjection,
}

export default testingSQLHandlers
