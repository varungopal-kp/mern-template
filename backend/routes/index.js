const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const privateKey = process.env.ACCESS_TOKEN_SECRET

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',async function(req, res, next) {
  const {credentials} =req.body

  if(!credentials) return res.json({message:"Failed"}).status(401)  

  const user= await  User.findOne(credentials).lean().exec();
  
  if(!user) return res.json({message:"Failed"}).status(401)  
    
    const token = jwt.sign(user, privateKey);
    req._user = user
    res.json({user,token})

});

module.exports = router;
