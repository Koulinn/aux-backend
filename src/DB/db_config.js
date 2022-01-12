import config from '../config/index.js'
import { Sequelize } from 'sequelize'

const {
  globalVariables: { APP_MODE, NODE_ENV },
} = config

// =====  DB CONNECTION STRING =====

const { PGUSER, PGHOST, PGPASSWORD, PGPORT, DATABASE_URL } = process.env

export const database =
  NODE_ENV === 'test'
    ? 'aux_TEST_DB'
    : APP_MODE === 'development'
    ? 'aux_DEV_DB'
    : 'aux_PROD_DB'

const DEV_URI = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${database}`

const DB_URI_STRING = APP_MODE === 'production' ? DATABASE_URL : DEV_URI

// =====  DB OPTIONS =====

const db_config_options_DEV = {}

const db_config_options_PROD = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
}

const DB_CONFIG_OPTIONS =
  APP_MODE === 'production' ? db_config_options_PROD : db_config_options_DEV

// =====  DB instance =====

const sequelize = new Sequelize(DB_URI_STRING, DB_CONFIG_OPTIONS)

export default sequelize
