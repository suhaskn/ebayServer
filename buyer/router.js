const {Router} = require('express')
const Buyer = require('./index.js')


const router = new Router()

router.post('/buyer',(req,res,next)=>{
  Buyer.create(req.body)
  .then(event => res.send(event))
  .catch(next)
})

module.exports = router