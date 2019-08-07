const Sequelize = require('sequelize')
const db = require('../db')

const Buyer = db.define(
  'buyer',
  {
    description: Sequelize.TEXT,
    pictureURL: Sequelize.TEXT,
    price: Sequelize.INTEGER,
    email: Sequelize.TEXT,
    phoneNumber: Sequelize.BIGINT
  }
)

module.exports = Buyer