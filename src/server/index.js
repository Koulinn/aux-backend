import express from 'express'
import cors from 'cors'
import config from '../config/index.js'
import '../DB/index.js'
import routes from './routes.js'
import morgan from 'morgan'

const {
  globalVariables: { PORT },
} = config

const server = express()

server.use(cors())
server.use(express.json())
server.use(morgan('tiny'))

routes.forEach((route) => {
  console.log(route)
  server.use(route.path, route.router)
})

server.listen(PORT, () => console.log('Server listening on ' + PORT))
server.on('error', (error) => console.log('Server crashed due ' + error))
