const {Router} = require('express')
const Buyer = require('./')


const router = new Router()

router.post('/buyer',(req,res,next)=>{
  Buyer.create(req.body)
  .then(event => res.send(event))
  .catch(next)
})

router.get('/buyer',(req,res,next)=>{
  Buyer.findAll()
    .then(events => res.send(events))
    .catch(next)
})

module.exports = router