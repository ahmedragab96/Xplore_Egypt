var express = require('express');
var hotels = express.Router();
const db = require('../app/config/db');
//const AuthCheck = require("../middleware/check-auth")

hotels.get('/getall', (req , res , next) => {
    
    let query="SELECT p.title,p.region,p.rating,h.itemid,h.hotel_id,h.features,h.description,h.priceRange,h.address,h.imageURL,h.mapURL,h.priceHigh,h.priceLow FROM hotels h join place p ON h.itemid=p.itemid"

    db.query(query , function (error , results , fields) {
        if (error) throw error ;
        res.json(results);
    });
});

//it returns an array with the hotel's object including all its details
hotels.get('/getById',(req,res,next)=>{
   let hotelID=req.query.id;
   let query="SELECT p.title,p.region,p.rating,h.itemid,h.hotel_id,h.features,h.description,h.priceRange,h.address,h.imageURL,h.mapURL,h.priceHigh,h.priceLow FROM hotels h join place p ON h.itemid=p.itemid WHERE h.itemid = ?"
   db.query(query, [hotelID],(error, results, fields) => {
    if (error) {
      return console.error(error.message);
     }
     res.json(results);
    });
});

hotels.post('/addhotel', (req, res, next) => {
    var itemid = Math.floor(2045 + Math.random() * 9000);
    const placeData = req.body;

    const queryAddPlace = `INSERT INTO place (keywords, price_cateogry, type, itemid, title, rating, region) 
                   VALUES ('${placeData.keywords}','${placeData.price_category}','Hotel','${itemid}','${placeData.title}',
                   '${placeData.rating}','${placeData.region}')`;

    db.query(queryAddPlace, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        
        const queryAddHotel = `INSERT INTO hotels (priceHigh, imageURL, mapURL, itemid, priceRange, StyleandPrice, priceLow, features, description, address) 
                        VALUES ('${placeData.priceHigh}','${placeData.imageURL}', '${placeData.mapURL}', '${itemid}','${placeData.priceRange}',
                            '${placeData.styleandPrice}','${placeData.priceLow}','${placeData.features}', '${placeData.description}','${placeData.address}')`;

        db.query(queryAddHotel,function (error , results , fields){
            if (error) {
                return console.error(error.message);
            }
            res.status(200).json({message: 'successfully add Hotel'});
        });      
    });
});

module.exports = hotels;