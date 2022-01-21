import db_connect from '../../src/DB/db_connection.js'
import sequelize from '../../src/DB/db_config.js'
import createTables from '../../src/DB/db_createTables.js'
import authTestsHandlers from './handlers.js'

const { testCheckExistentOAuthAccount, testCreateGoogleAccount } =
  authTestsHandlers

const mockGoogleProfile = {
  id: 'google123',
  emails: [{ value: 'email1' }],
  name: {
    familyName: 'TestName',
    givenName: 'TestLastName',
  },
  photos: [{ value: 'testAvatarURL' }],
}

describe('Testing account related queries', () => {
  beforeAll(async () => {
    await createTables()
    await db_connect()
  })
  it('should test createGoogleAccount function', async () => {
    await testCreateGoogleAccount(mockGoogleProfile)
  })
  it('should test isExistentOAuthAccount with Google', async () =>
    await testCheckExistentOAuthAccount('google123', 'google_id'))

  afterAll(async () => {
    await sequelize.query('DROP SCHEMA public CASCADE; CREATE SCHEMA public;')
    await sequelize.close()
  })
})
