var express = require('express');
var model = express.Router();
const db = require('../app/config/db');
const request = require('request');
var fs = require('fs')

model.get('/', (req, res, next) => {
  id = req.query.id;
  let query = `SELECT itemID,rating FROM userRatings WHERE userID=?`;
  newUSer=0;
  db.query(query, [id], (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
  
  
    if(results.length < 10){newUSer=1;}
    
    fs.writeFileSync("./userRatings.json", JSON.stringify(results));
    model(newUSer);
    
  });
  
  
function model(newUSer){
  var recommendation_details = [];
  var recommendations='';
  if(newUSer==1)
  {
    console.log("no model");
    recommendations=[1217,216,13,922,1203,741,1175,1945,9,353,1256,2008,1199,969,1673,903,1204,1212,1272,899,1748
      ,1077,1466,1907,1250,217];
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
          let rest_query = "SELECT p.itemid,p.title,p.type,p.region,p.rating,r.location,r.photo,r.cuisine FROM restaurants r join place p ON r.itemid=p.itemid  WHERE r.itemid = ?";
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
          let trip_query = "SELECT p.itemid,p.title,p.type,p.region,p.rating,t.description,t.duration,t.price,t.includes,t.experiences,t.imageURL FROM trips t join place p ON t.itemid=p.itemid WHERE t.itemid = ?";
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
          let hotel_query = "SELECT p.itemid,p.title,p.type,p.region,p.rating,h.features,h.description,h.priceRange,h.address,h.imageURL,h.mapURL,h.priceHigh,h.priceLow FROM hotels h join place p ON h.itemid=p.itemid WHERE h.itemid = ?";
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
    setTimeout(function () { res.json(recommendation_details) }, 4000);
  }
  else
  {
    console.log("model");
    request(' http://e5a3342a.ngrok.io/recommend', { json: true }, (err, resp, body) => {
    if (err) { return console.log(err); }
   
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
          let rest_query = "SELECT p.itemid,p.title,p.type,p.region,p.rating,r.location,r.photo,r.cuisine FROM restaurants r join place p ON r.itemid=p.itemid  WHERE r.itemid = ?";
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
          let trip_query = "SELECT p.itemid,p.title,p.type,p.region,p.rating,t.description,t.duration,t.price,t.includes,t.experiences,t.imageURL FROM trips t join place p ON t.itemid=p.itemid WHERE t.itemid = ?";
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
          let hotel_query = "SELECT p.itemid,p.title,p.type,p.region,p.rating,h.features,h.description,h.priceRange,h.address,h.imageURL,h.mapURL,h.priceHigh,h.priceLow FROM hotels h join place p ON h.itemid=p.itemid WHERE h.itemid = ?";
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
    setTimeout(function () { res.json(recommendation_details) }, 5000);


})
  }
}

});

module.exports = model;