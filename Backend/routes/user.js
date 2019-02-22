var express = require('express');
var users = express.Router();
//const  validationResult  = require('express-validator');
const db = require('../app/config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//var passport = require ('passport');
//var LocalStrategy = require('passport-local').Strategy;
const saltRounds = 10;



//REGISTER

users.post('/register' , function (req , res , next ) {
   const fname = req.body.fname;
   const lname = req.body.lname;
   const email = req.body.email;
   const password = req.body.password;
   const DoB = req.body.DOB;
   const gender = req.body.gender;
   const nationality = req.body.nationality;

   bcrypt.hash(password, saltRounds, function(err, hash) {
     let query = "INSERT INTO `users` (first_name, last_name, email, password , DoB , gender , nationality) VALUES ('" +
                           fname + "', '" + lname + "','" + email + "','" + hash + "','" + DoB + "','" + gender + "', '" + nationality + "')";
       db.query(query, (err, result) => {
           if (err) {
               return res.status(500).send(err);
           }
           db.query("SELECT LAST_INSERT_ID() as user_id", function (error , results , fields){

              if (error) throw error ;

              const user_id = results[0];

               let token = jwt.sign({email : email , userId : user_id} , 'secret' , {
                 expiresIn : '1h'
               })
               res.json ({token : token});
          })
     })
});

});

users.post('/login' , function (req , res , next ) {
    const email = req.body.email;
    const password = req.body.password;

  db.query("SELECT ID , email , password FROM users WHERE email = ?",  [email] , function (error , results , fields){

      if (error) throw error;

      if (results.length === 0)
        {
          return res.json({error : "User doesnot exist!"})
        }
      else
        {
          bcrypt.compare(password , results[0].password , (err, respond) => {
            
            if (!respond){
              return res.json({error: "Password is incorrect!"});
            }
            if(respond){
            let token = jwt.sign({email : email , userId : results[0].ID} , 'secret' , {
            expiresIn : '1h'
            })
            res.json({
              token : token,
              expireIn: 3600
            });
            }
          })
        }
    })
});

users.get('/getdata' , function(req , res , next ){
  
  const userid = req.query.id ;
  
  db.query("SELECT * FROM users WHERE ID = ?",  [userid] , function (error , results , fields){

      res.json({
        results
      });
    })
    
});

// Function needs 2 parameters as body request (id , plan)
users.post('/addplan' , function(req , res , next ){
  const userid = req.body.data.id;
  console.log(userid);
  const plan = JSON.stringify(req.body.data.plan);
  console.log(plan);
  
  db.query("UPDATE users SET trips = ? WHERE ID = ?", [plan , userid] , function (error , results , fields){

    if (error) throw err ;
    
    res.status(200).json({
      results
    })
    
  });
    
});

users.get('/getplan' , function(req , res , next ){
  
  const userid = req.query.id;
  
  db.query("SELECT trips FROM users WHERE ID = ?", [userid] , function (error , results , fields){

    if (error) throw err ;
    
    const plan = JSON.parse(results[0].trips);
    
    res.status(200).json({
      plan
    })
    
  });
    
});

module.exports = users;
