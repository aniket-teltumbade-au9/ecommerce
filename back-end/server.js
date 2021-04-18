const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const db = require('./db')
const UserRouter = require('./routers/UserRouter')
const CategoryRouter = require('./routers/categoryRouter')
const BrandRouter = require('./routers/BrandRouter')
const ProductRouter = require('./routers/ProductRouter')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))

const port = process.env.PORT || 8989

db()

app.get('/', function (req, res) {
  res.send('live')
})

app.use('/user', UserRouter)
app.use('/category', CategoryRouter)
app.use('/brand', BrandRouter)
app.use('/product', ProductRouter)

app.listen(port, function () {
  console.log(`listening on port: ${port}`)
})