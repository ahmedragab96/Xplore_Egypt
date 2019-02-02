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
   const DoB = req.body.dob;
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

module.exports = users;
