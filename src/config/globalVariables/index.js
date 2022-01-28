import dotenv from 'dotenv'

if (process.env.NODE_ENV === 'test') dotenv.config()

const {
  PORT,
  APP_MODE,
  NODE_ENV,
  DEV_URL,
  PROD_URL_1,
  PROD_URL_2,
  SENDGRID_API_KEY,
  AUX_SEO_EMAIL,
} = process.env

const globalVariables = {
  PORT,
  APP_MODE,
  NODE_ENV,
  DEV_URL,
  PROD_URL_1,
  PROD_URL_2,
  SENDGRID_API_KEY,
  AUX_SEO_EMAIL,
}
export default globalVariables
