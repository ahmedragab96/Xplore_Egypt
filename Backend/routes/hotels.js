var express = require('express');
var hotels = express.Router();
const db = require('../app/config/db');
//const AuthCheck = require("../middleware/check-auth")

hotels.get('/getall', (req , res , next) => {
    
    let query="SELECT p.title,p.region,p.rating,h.hotel_id,h.features,h.description,h.priceRange,h.address,h.imageURL,h.mapURL,h.priceHigh,h.priceLow FROM hotels h join place p ON h.itemid=p.itemid"

    db.query(query , function (error , results , fields) {
        if (error) throw error ;
        res.json(results);
    });
});

//it returns an array with the hotel's object including all its details
hotels.get('/getById',(req,res,next)=>{
   let hotelID=req.query.id;
   let query="SELECT p.title,p.region,p.rating,h.hotel_id,h.features,h.description,h.priceRange,h.address,h.imageURL,h.mapURL,h.priceHigh,h.priceLow FROM hotels h join place p ON h.itemid=p.itemid WHERE h.itemid = ?"
   db.query(query, [hotelID],(error, results, fields) => {
    if (error) {
      return console.error(error.message);
     }
     res.json(results);
    });
});

module.exports = hotels;