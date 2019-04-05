var express = require('express');
var trips = express.Router();
const db = require('../app/config/db');
const AuthCheck = require("../middleware/check-auth")

trips.get('/getall', (req , res , next) => {
    
    let query ="SELECT p.title,p.region,p.rating,t.description,t.duration,t.price,t.includes,t.experiences,t.imageURL FROM trips t join place p ON t.itemid=p.itemid";

    db.query(query , function (error , results , fields) {
        if (error) throw error ;

        res.json(results);
    });
});

////it returns an array with the trip's object including all its details
trips.get('/getById',(req,res,next)=>{
   let tripID=req.query.id;
   let query="SELECT p.title,p.region,p.rating,t.description,t.duration,t.price,t.includes,t.experiences,t.imageURL FROM trips t join place p ON t.itemid=p.itemid WHERE t.itemid = ?";
   db.query(query, [tripID],(error, results, fields) => {
    if (error) {
      return console.error(error.message);
     }
     res.json(results);
    });
});

module.exports = trips;