const express = require('express')
const Sequelize = require('sequelize')
const databaseUrl = 'postgres://postgres:secret@localhost:5432/postgres'
const db = new Sequelize(databaseUrl)

port = process.env.PORT || 3000

const app = express()

db
  .sync()
  .then(() => console.log('Database schema updated'))
  .catch(console.error)

app.listen(port, ()=>console.log(`App listning on port:${port}`))
