import db_connect from '../../src/DB/db_connection.js'
import sequelize from '../../src/DB/db_config.js'

describe('Testing the Database testing environment', () => {
  beforeAll(async () => {
    await db_connect()
  })
  it('should test that true is true', () => {
    console.log('Test Database is running')
    expect(true).toBe(true)
  })
  afterAll(async () => {
    await sequelize.close()
  })
})
