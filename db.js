const Sequelize = require('sequelize')

console.log('DATABASE_URL test:', process.env.DATABASE_URL)
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'
console.log('databaseUrl test:', databaseUrl)
const db = new Sequelize(databaseUrl)

db
  .sync()
  .then(() => console.log('Database schema updated'))
  .catch(console.error)

module.exports = db