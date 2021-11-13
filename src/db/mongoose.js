const mongoose = require('mongoose')
require('dotenv').config()

const dbConnectionUri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
mongoose.connect(
  dbConnectionUri,
  {
    useNewUrlParser: true,
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    authSource: "admin"
  },
  (error) => {
    if (error) {
      console.error.bind(console, `connection error: ${error}`)
    }
    console.log(`Connected successfully: ${dbConnectionUri}`)
  })
