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

    console.log(placeData.keywords);

    const queryAddPlace = `INSERT INTO place (keywords, price_cateogry, type, itemid, title, rating, region) 
                   VALUES ('${placeData.keywords}','${placeData.price_category}','trip','${itemid}','${placeData.title}',
                   '${placeData.rating}','${placeData.region}')`;

    db.query(queryAddPlace, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        
        const queryAddTrip = `INSERT INTO trips (imageURL, description, includes, price, experiences, duration, itemid) 
                   VALUES ('${placeData.imageURL}','${placeData.description}','${placeData.includes}','${placeData.price}',
                   '${placeData.experiences}','${placeData.duration}', '${itemid}')`;

        db.query(queryAddTrip,function (error , results , fields){
            if (error) {
                return console.error(error.message);
            }
            res.status(200).json(results);
        });
            
    });
});

module.exports = trips;