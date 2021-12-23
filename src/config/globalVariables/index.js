import dotenv from 'dotenv'

if (process.env.NODE_ENV === 'test') dotenv.config()

const { PORT, APP_MODE, NODE_ENV } = process.env

const globalVariables = {
  PORT,
  APP_MODE,
  NODE_ENV,
}
export default globalVariables
