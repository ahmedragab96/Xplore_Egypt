var express = require('express');
var restaurants = express.Router();
const db = require('../app/config/db');

restaurants.get('/getall', (req , res , next) => {
    
    let query = "SELECT p.title,p.region,p.rating,r.itemid,r.restaurant_id,r.location,r.phone,r.photo,r.cuisine FROM restaurants r join place p ON r.itemid=p.itemid";

    db.query(query , function (error , results , fields) {
        if (error) throw error ;
        res.json(results);
    });
});

//it returns an array with the restaurants's object including all its details
restaurants.get('/getById',(req,res,next)=>{
   let restaurantID=req.query.id;
   let query="SELECT p.title,p.region,p.rating,r.itemid,r.restaurant_id,r.location,r.phone,r.photo,r.cuisine FROM restaurants r join place p ON r.itemid=p.itemid  WHERE r.itemid = ?";
   db.query(query, [restaurantID],(error, results, fields) => {
    if (error) {
      return console.error(error.message);
     }
     res.json(results);
    });
});

module.exports = restaurants;