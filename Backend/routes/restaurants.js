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

restaurants.delete('/delete/:id', (req, res) => {
    
    // the id of the item in restaurant table
    const id = req.params.id;
    
    // select the itemid of the restaurant before deleting it to be able to delete it from place table
    const query = "SELECT itemid FROM restaurants WHERE restaurant_id = ?";
    db.query(query, [id], function (error, results, fields) {
        const itemid = results[0].itemid;
        
        // delete restaurant from restaurants table first
        if (deleteFromRestaurants(id)) {
            // delete restaurant from place table
            if (deleteFromPlaces(itemid)) {

                res.send(`successfully deleted the restaurant with id = ${id} and itemid = ${itemid}`).status(200);
            }
        } else {
            res.status(400);
        }
    });
  });
  
function deleteFromRestaurants(id) {
    const deleteFromRestaurantsQuery = "DELETE FROM restaurants WHERE restaurant_id = ?";
    db.query(deleteFromRestaurantsQuery, [id], function (error, results, fields) {
        if (error) {
            throw error;
        }
    });
    
    return true;
};

function deleteFromPlaces (itemid) {
    const deleteFromRestaurantsQuery = "DELETE FROM place WHERE itemid = ?";
    db.query(deleteFromRestaurantsQuery, [itemid], function (error, results, fields) {
        if (error) {
            throw error;
        }
    });
    
    return true;
};

module.exports = restaurants;