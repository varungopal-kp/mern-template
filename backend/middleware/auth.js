var jwt = require('jsonwebtoken');

module.exports.auth = function (req, res, next) {
  
    const authHeaders = req.headers['authorization']
    const token =authHeaders && authHeaders.split(' ')[1]
    if(!token) return res.sendStatus(401)
 
    var privateKey = process.env.ACCESS_TOKEN_SECRET
    jwt.verify(token, privateKey, function(err, decoded) {
     if(err) return res.sendStatus(403)
     req.auth = decoded
    
   });
     next()
   }
 
 