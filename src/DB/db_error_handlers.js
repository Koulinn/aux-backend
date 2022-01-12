const db_conn_resolve = (err) => {
  console.log('DB connection ERROR =====>', err)
}

const db_error_handlers = { db_conn_resolve }

export default db_error_handlers
