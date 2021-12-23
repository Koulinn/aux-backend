import pkg from 'pg'
import config from '../config/index.js'
const { Client } = pkg

const {
  globalVariables: { APP_MODE, NODE_ENV },
} = config

export const database =
  NODE_ENV === 'test'
    ? 'aux_test'
    : APP_MODE === 'development'
    ? 'aux_dev'
    : 'Aux'

const db_config = {
  database: database,
}

const client = new Client(db_config)

export default client
