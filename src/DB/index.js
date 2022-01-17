import db_connect from './db_connection.js'
import createTables from './db_createTables.js'

if (process.env.NODE_ENV !== 'test') {
  await createTables()
  await db_connect()
}
