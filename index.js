import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import { welcomeMsg } from './constant.js'
import video from './routes/video.js'
import topic from './routes/topic.js'
import amazon from './routes/amazon.js'


// Enable env
dotenv.config()
const PORT = process.env.PORT

// create api app
const app = express()
app.use(express.json())

// set limit and cross origin access
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())


// define root route
app.get('/', (req, res) => {
  res.send(`${welcomeMsg.message} ${welcomeMsg.version}`)
})


// define routes
app.use('/video', video)
app.use('/topic', topic)
app.use('/amazon', amazon)

// Connect Database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Explore-best backend server running on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })

