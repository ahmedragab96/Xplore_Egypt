var express = require('express');
var users = express.Router();
//const  validationResult  = require('express-validator');
const db = require('../app/config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//var passport = require ('passport');
//var LocalStrategy = require('passport-local').Strategy;
const saltRounds = 10;
const multer = require('multer');

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg'
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid image type");
    if (isValid) {
      error = null;
    }
    cb(null, "../Frontend/src/assets/profilepics/");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);
  }
});

//REGISTER

users.post('/register', multer({ storage: storage }).single("image"), function (req, res, next) {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const password = req.body.password;
  const DoB = req.body.DOB;
  const gender = req.body.gender;
  const nationality = req.body.nationality;

  bcrypt.hash(password, saltRounds, function (err, hash) {
    let query = "INSERT INTO `users` (first_name, last_name, email, password , DoB , gender , nationality) VALUES ('" +
      fname + "', '" + lname + "','" + email + "','" + hash + "','" + DoB + "','" + gender + "', '" + nationality + "')";
    db.query(query, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      db.query("SELECT LAST_INSERT_ID() as user_id", function (error, results, fields) {

        if (error) throw error;

        const user_id = results[0];

        let token = jwt.sign({ email: email, userId: user_id }, 'secret', {
          expiresIn: '1h'
        })
        res.json({ token: token });
      })
    })
  });

});

users.post('/login', function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT ID , email , password FROM users WHERE email = ?", [email], function (error, results, fields) {

    if (error) throw error;

    if (results.length === 0) {
      return res.json({ error: "User doesnot exist!" })
    }
    else {
      bcrypt.compare(password, results[0].password, (err, respond) => {

        if (!respond) {
          return res.json({ error: "Password is incorrect!" });
        }
        if (respond) {
          console.log(results)
          let token = jwt.sign({ email: email, userId: results[0].ID }, 'secret', {
            expiresIn: '1h'
          })
          res.json({
            token: token,
            expireIn: 3600
          });
        }
      })
    }
  })
});

users.get('/getdata', function (req, res, next) {

  const userid = req.query.id;

  db.query("SELECT * FROM users WHERE ID = ?", [userid], function (error, results, fields) {

    res.json({
      results
    });
  })

});

users.get('/getall', function (req, res, next) {

  db.query("SELECT * FROM users", function (error, results, fields) {

    res.json({
      results
    });
  })

});

users.put('/editavatar/:id',multer({ storage: storage }).single("avatar") , (req, res, next) => {
 let id = req.params.id; 
 let avatar=req.file;
 console.log(req)
      let query = "UPDATE `users` SET `avatar` = '" + avatar.filename + "' WHERE ID = ?";
       db.query(query, [id], (err, result) => {
        if (err) {
          console.log(err)
          return res.status(500).send(err);
        }
            res.json({
      result
    });

      })

     });

users.post('/edit/:id', (req, res, next) => {
  // console.log(req.body)
  let id = req.params.id;
  let fname = req.body.fname;
  let lname = req.body.lname;
  let email = req.body.email;
  let DOB = req.body.DOB;
  let gender = req.body.gender;
  let nationality = req.body.nationality;

  if (req.body.password != undefined) {
    let password = req.body.password;
    console.log(password);
    bcrypt.hash(password, saltRounds, function (err, hash) {
      let query = "UPDATE `users` SET `first_name` = '" + fname + "' , `last_name` ='" + lname + "' , `email` = '" + email +
        "' , `password` = '" + hash + "' , `DoB` = '" + DOB + "' , `gender` = '" + gender + "' , `nationality` ='" + nationality + "' WHERE ID = ?";

      db.query(query, [id], (err, result) => {
        if (err) {
          console.log(err)
          return res.status(500).send(err);
        }
            res.json({
      result
    });

      })
    });

  }
  else {

    let query = "UPDATE `users` SET `first_name` = '" + fname + "' , `last_name` ='" + lname + "' , `email` = '" + email +
      "' , `DoB` = '" + DOB + "' , `gender` = '" + gender + "' , `nationality` ='" + nationality + "' WHERE ID = ?";

    db.query(query, [id], (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send("edited successfully without password");

    })
  }
});

users.delete('/delete/:id', (req, res) => {
  let id = req.params.id;
  let query = "DELETE FROM users WHERE ID = ?";
  db.query(query, [id], function (error, results, fields) {

    if (error) throw err;
    res.send("successfully deleted user " + id);

  });
});
// Function needs 2 parameters as body request (id , plan)
users.post('/addplan', function (req, res, next) {
  const userid = req.body.id;
  console.log(userid);

  const plan = JSON.stringify(req.body.plan);
  console.log(plan);

  db.query("UPDATE users SET trips = ? WHERE ID = ?", [plan, userid], function (error, results, fields) {

    if (error) throw err;

    res.status(200).json({
      results
    })

  });


});

users.get('/getplan', function (req, res, next) {

  const userid = req.query.id;

  db.query("SELECT trips FROM users WHERE ID = ?", [userid], function (error, results, fields) {

    if (error) throw err;

    const plan = JSON.parse(results[0].trips);

    res.status(200).json({
      plan
    })

  });

});

module.exports = users;
