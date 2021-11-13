require('./db/mongoose')
const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const securityRouter = require('./routers/security')
require('dotenv').config()

const app = express()
const port = process.env.APP_PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use(securityRouter)

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})
