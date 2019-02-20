var express = require('express');
var restaurants = express.Router();
const db = require('../app/config/db');
//const AuthCheck = require("../middleware/check-auth")

restaurants.get('/getall', (req , res , next) => {
    
    let query = "SELECT * FROM Restaurants";

    db.query(query , function (error , results , fields) {
        if (error) throw error ;
        res.json(results);
    });
});

//it returns an array with the restaurants's object including all its details
restaurants.get('/getById',(req,res,next)=>{
   let restaurantID=req.query.id;
   let query="SELECT * from Restaurants WHERE ID = ?";
   db.query(query, [restaurantID],(error, results, fields) => {
    if (error) {
      return console.error(error.message);
     }
     res.json(results);
    });
});

module.exports = restaurants;