import globalVariables from './globalVariables/index.js'

const { APP_MODE, DEV_URL, PROD_URL_1, PROD_URL_2 } = globalVariables

const trustableOrigins =
  APP_MODE === 'production' ? [PROD_URL_1, PROD_URL_2] : [DEV_URL]

const corsConfig = {
  origin: function (origin, callback) {
    if (!origin || trustableOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Origin not allowed'))
    }
  },
  credentials: true,
}

export default corsConfig
