import testingSQLHandlers from './handlers.js'

const { testSQLInjection, testCreateUser } = testingSQLHandlers

describe('Testing SQL body injection prevention', () => {
  it('should test that accept valid values', () => {
    const body = {
      email: 'test@mail.com',
      password: '123456',
    }
    testSQLInjection(body, false)
  })
  it('should test that prevent invalid ;', () => {
    const body = {
      email: 'test@mail.com; SELECT * FROM USERS ;',
      password: '123456',
    }
    testSQLInjection(body, true)
  })
})

describe('Testing user related queries', () => {
  it('should test valid body of createUser function', async () =>
    await testCreateUser())
  it('should test invalid body of createUser function', async () =>
    await testCreateUser())
})
