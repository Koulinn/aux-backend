import sequelize from './db_config.js'
import tableQueries from './db_get_tables.js'

const createTables = async () => {
  try {
    let tablesQuery = ''
    tableQueries.forEach((table) => {
      tablesQuery += table
    })
    await sequelize.query(tablesQuery)
  } catch (error) {
    console.log(error, 'from createTables')
  }
}

export default createTables
