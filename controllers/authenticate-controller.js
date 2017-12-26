require('dotenv').config();
var jwt=require('jsonwebtoken');
var connection = require('./../config');
module.exports.authenticate=function(req,res){
  var email=req.body.email;
  var password=req.body.password;
  var query = `SELECT * FROM users WHERE email = '${email}'`
  connection.query(query , function (error, results, fields) {
    if (error) {
      res.json({
        status:false,
        message:'there are some error with query',
      })
      throw error
    }else{
      if(results.length >0){
        if(password==results[0].password){
          var payload = {id: password};
          var token=jwt.sign(payload ,process.env.SECRET_KEY,{
            expiresIn:5000
          });
          res.json({
            status:true,
            token:token
          })
        }else{
          res.json({
            status:false,
            message:"Email and password does not match"
          });
        }
      }
      else{
        res.json({
          status:false,
          message:"Email does not exits"
        });
      }
    }
  });
}
