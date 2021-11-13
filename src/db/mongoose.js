const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(
    process.env.DB_CONNECTION_STRING,
    {
        useNewUrlParser: true,
        authSource: "admin"
    },
    (error) => {
        if (error) {
            console.error.bind(console, `connection error: ${error}`)
        }
        console.log(`Connected successfully: ${process.env.DB_CONNECTION_STRING}`)
    }
)
