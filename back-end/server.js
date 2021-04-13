const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const db = require('./db')
const UserRouter = require('./routers/UserRouter')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 8989

db()

app.use('/user', UserRouter)

app.listen(port, function () {
    console.log(`listening on port: ${port}`)
})