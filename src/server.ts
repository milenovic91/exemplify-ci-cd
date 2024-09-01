import express from 'express'
import { greeting } from './GreetingService'
import getServerIP from './NetworkingUtil'

const app = express()

const SERVER_PORT = process.env.SERVER_PORT || 8000

app.get('/', function(_, res) {
  res.json({
    message: greeting(),
    server: {
      ip: getServerIP()
    }
  })
})

app.listen(SERVER_PORT, () => {
  console.log(`App is running on port ${SERVER_PORT}`)
})
