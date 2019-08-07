const express = require('express')
const bodyParser = require('body-parser')
//const db = require('./db')
//const Buyer = require('./buyer/index')
const buyerRouter = require('./buyer/router')

port = process.env.PORT || 3000

const jsonParser = bodyParser.json()

const app = express()
app.use(jsonParser)
app.use(buyerRouter)

app.listen(port, ()=>console.log(`App listning on port:${port}`))
