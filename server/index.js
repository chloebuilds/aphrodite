import express from "express"
import mongoose from "mongoose"
import { PORT, MONGODB_CONNECTION_STRING } from "./config/environment.js"
import router from "./config/router.js"
import logger from "./lib/logger.js"

const app = express()

// MIDDLEWARE
app.use(logger)
app.use(express.json())
app.use(router)


// INDEX ROUTE 
app.get('/', showProducts => {
  res.send('Hello World')
})

const startServer = async () => {
  try {
    await mongoose.connect(MONGODB_CONNECTION_STRING)
    app.listen(PORT, () => {
      console.log(`🛳 Listening on port: ${PORT}`)
  })
  } catch (err) {
    console.log('🚨 Oh no something went wrong');
    console.log(err);
  }
}

startServer()
