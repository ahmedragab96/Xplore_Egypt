var express = require('express');
var model = express.Router();
const db = require('../app/config/db');
const request = require('request');
var fs = require('fs')

model.get('/', (req, res, next) => {
  id = req.query.id;
  let query = `SELECT itemID,rating FROM userRatings WHERE userID=?`;
  db.query(query, [id], (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    fs.writeFileSync("../RBM_model/userRatings.json", JSON.stringify(results));
    //res.json(results);
  });
  request('http://127.0.0.1:5000/recommend', { json: true }, (err, resp, body) => {
    if (err) { return console.log(err); }
    var recommendation_details = []
    recommendations = body.split("|");
    //to return recommended items details in json format
    for (var i = 0; i < recommendations.length; i++) {
      let item_id = recommendations[i];
      console.log(item_id);
      let query = 'SELECT type FROM place WHERE itemid=?'
      db.query(query, [item_id], (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        var type = results[0]['type'];

        if (type == "Restaurant") {
          let rest_query = "SELECT p.title,p.type,p.region,p.rating,r.location,r.photo,r.cuisine FROM restaurants r join place p ON r.itemid=p.itemid  WHERE r.itemid = ?";
          db.query(rest_query, [item_id], (error, query_result, fields) => {
            if (error) {
              return console.error(error.message);
            }
            if (query_result[0] != undefined) {
              recommendation_details.push(query_result[0]);

            }

          });
        }
        else if (type == "trip") {
          let trip_query = "SELECT p.title,p.type,p.region,p.rating,t.description,t.duration,t.price,t.includes,t.experiences,t.imageURL FROM trips t join place p ON t.itemid=p.itemid WHERE t.itemid = ?";
          db.query(trip_query, [item_id], (error, query_result, fields) => {
            if (error) {
              return console.error(error.message);
            }
            if (query_result[0] != undefined) {

              recommendation_details.push(query_result[0]);
            }

          });
        }
        else if (type == "Hotel") {
          let hotel_query = "SELECT p.title,p.type,p.region,p.rating,h.features,h.description,h.priceRange,h.address,h.imageURL,h.mapURL,h.priceHigh,h.priceLow FROM hotels h join place p ON h.itemid=p.itemid WHERE h.itemid = ?";
          db.query(hotel_query, [item_id], (error, query_result, fields) => {
            if (error) {
              return console.error(error.message);
            }
            if (query_result[0] != undefined) {
              recommendation_details.push(query_result[0]);

            }

          });
        }

      });

    }
    setTimeout(function () { res.json(recommendation_details) }, 6000);

  });


})

module.exports = model;