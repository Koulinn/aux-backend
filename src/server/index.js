import express from 'express'
import cors from 'cors'
import config from '../config/index.js'
import '../DB/index.js'
import routes from './routes.js'
import morgan from 'morgan'
import errorHandlers from '../library/error_handlers.js'

const {
  globalVariables: { PORT },
} = config

const server = express()

server.use(cors())
server.use(express.json())
server.use(morgan('tiny'))

routes.forEach((route) => {
  server.use(route.path, route.router)
})

errorHandlers.forEach((errorHandler) => server.use(errorHandler))

server.listen(PORT, () => console.log('Server listening on ' + PORT))
server.on('error', (error) => console.log('Server crashed due ' + error))

export default server
