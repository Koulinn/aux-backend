import sequelize from './db_config.js'
import db_error_handlers from './db_error_handlers.js'
import { database } from './db_config.js'

const { db_conn_resolve } = db_error_handlers

const db_connect = async () => {
  try {
    await sequelize.authenticate()

    console.log(
      `Connection to DB =====> ${database} has been established successfully.`
    )
  } catch (error) {
    db_conn_resolve(error)
  }
}

export default db_connect
