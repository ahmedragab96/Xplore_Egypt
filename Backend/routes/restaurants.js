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

restaurants.post('/addrestaurant', (req, res, next) => {
    var itemid = Math.floor(2045 + Math.random() * 9000);
    const placeData = req.body;

    const queryAddPlace = `INSERT INTO place (keywords, price_cateogry, type, itemid, title, rating, region) 
                   VALUES ('${placeData.keywords}','${placeData.price_category}','Restaurant','${itemid}','${placeData.title}',
                   '${placeData.rating}','${placeData.region}')`;

    db.query(queryAddPlace, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }

        const queryAddRestaurant = `INSERT INTO restaurants (itemid, phone, location, photo, cuisine) 
                                    VALUES ('${itemid}','${placeData.phone}', '${placeData.location}', '${placeData.photo}',
                                    '${placeData.cuisine}')`;

        db.query(queryAddRestaurant, function (error, results, fields) {
            if (error) {
                return console.error(error.message);
            }
            res.status(200).json({ message: 'successfully add Restaurant' });
        });
    });
});

module.exports = restaurants;