const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
//const db = require('./db')
//const Buyer = require('./buyer/index')
const buyerRouter = require('./buyer/router')

const app = express()

const middleware = cors()
app.use(middleware)

const jsonParser = bodyParser.json()

app.use(jsonParser)
app.use(buyerRouter)

port = process.env.PORT || 3000

app.listen(port, ()=>console.log(`App listning on port:${port}`))
