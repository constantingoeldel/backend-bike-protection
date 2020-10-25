import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import sigfox from './sigfox'

const server = express()
server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/api/sigfox', sigfox)
server.get('/', (req, res) => {
  res.send('This api is connected to the bike project')
})

export default server
