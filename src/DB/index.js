import db_connect from './db_connection.js'
import createTables from './db_createTables.js'

createTables()

if (process.env.NODE_ENV !== 'test') {
  db_connect()
}
