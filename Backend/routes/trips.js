var express = require('express');
var trips = express.Router();
const db = require('../app/config/db');
const AuthCheck = require("../middleware/check-auth")

trips.get('/getall', (req , res , next) => {
    
    let query ="SELECT p.title,p.region,p.rating,t.itemid,t.trip_id,t.description,t.duration,t.price,t.includes,t.experiences,t.imageURL FROM trips t join place p ON t.itemid=p.itemid";

    db.query(query , function (error , results , fields) {
        if (error) throw error ;

        res.json(results);
    });
});

////it returns an array with the trip's object including all its details
trips.get('/getById', (req, res, next) => {
    let tripID = req.query.id;
    let query = "SELECT p.title,p.region,p.rating,t.itemid,t.trip_id,t.description,t.duration,t.price,t.includes,t.experiences,t.imageURL FROM trips t join place p ON t.itemid=p.itemid WHERE t.itemid = ?";
    db.query(query, [tripID], (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.json(results);
    });
});

trips.post('/addtrip', (req, res, next) => {
    var itemid = Math.floor(2045 + Math.random() * 9000);
    const placeData = req.body;

    const queryAddPlace = `INSERT INTO place (keywords, price_cateogry, type, itemid, title, rating, region) 
                   VALUES ('${placeData.keywords}','${placeData.price_category}','trip','${itemid}','${placeData.title}',
                   '${placeData.rating}','${placeData.region}')`;

    db.query(queryAddPlace, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }

        const queryAddTrip = `INSERT INTO trips (imageURL, description, includes, price, experiences, duration, itemid) 
                   VALUES ('${placeData.imageURL}','${placeData.description}','${placeData.includes}','${placeData.price}',
                   '${placeData.experiences}','${placeData.duration}', '${itemid}')`;

        db.query(queryAddTrip, function (error, results, fields) {
            if (error) {
                return console.error(error.message);
            }
            res.status(200).json(results);
        });

    });
});

trips.delete('/delete/:id', (req, res) => {
    
    // the id of the item in trip table
    const id = req.params.id;
    
    // select the itemid of the trip before deleting it to be able to delete it from place table
    const query = "SELECT itemid FROM trips WHERE trip_id = ?";
    db.query(query, [id], function (error, results, fields) {
        const itemid = results[0].itemid;
        
        // delete trip from trips table first
        if (deleteFromTrips(id)) {
            // delete trip from place table
            if (deleteFromPlaces(itemid)) {

                res.send(`successfully deleted the trip with id = ${id} and itemid = ${itemid}`).status(200);
            }
        } else {
            res.status(400);
        }
    });
  });
  
function deleteFromTrips(id) {
    const deleteFromTripsQuery = "DELETE FROM trips WHERE trip_id = ?";
    db.query(deleteFromTripsQuery, [id], function (error, results, fields) {
        if (error) {
            throw error;
        }
    });
    
    return true;
};

function deleteFromPlaces (itemid) {
    const deleteFromTripsQuery = "DELETE FROM place WHERE itemid = ?";
    db.query(deleteFromTripsQuery, [itemid], function (error, results, fields) {
        if (error) {
            throw error;
        }
    });
    
    return true;
};

module.exports = trips;