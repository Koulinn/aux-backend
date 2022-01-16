import testLib from './test_lib/index.js'

const {
  testingHandlers: { testSQLInjection },
} = testLib

describe('Testing SQL body injection prevention', () => {
  it('should test that accept valid values', () => {
    const body = {
      email: 'test@mail.com',
      password: '123456',
    }
    testSQLInjection(body, true)
  })
  it('should test that prevent invalid ;', () => {
    const body = {
      email: 'test@mail.com; SELECT * FROM USERS ;',
      password: '123456',
    }
    testSQLInjection(body, false)
  })
})
