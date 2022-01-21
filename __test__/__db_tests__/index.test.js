import db_connect from '../../src/DB/db_connection.js'
import sequelize from '../../src/DB/db_config.js'
import createTables from '../../src/DB/db_createTables.js'
import DBTestsHandlers from './handlers.js'

const { testCreateAccountWithEmailAndPassword } = DBTestsHandlers

describe('Testing the Database testing environment', () => {
  beforeAll(async () => {
    await createTables()
    await db_connect()
  })

  it('should test create user with email and password', async () =>
    await testCreateAccountWithEmailAndPassword())

  afterAll(async () => {
    await sequelize.query('DROP SCHEMA public CASCADE; CREATE SCHEMA public;')
    await sequelize.close()
  })
})
