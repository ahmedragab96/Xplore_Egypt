var express = require('express');
var model = express.Router();
const db = require('../app/config/db');
const request = require('request');
var fs = require('fs')

model.get('/',(req,res,next)=>{
    id=req.query.id;
    let query = `SELECT itemID,rating FROM userRatings WHERE userID=?`;
    db.query(query, [id], (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        fs.writeFileSync("../../RBM_model/userRatings.json",JSON.stringify(results));
        res.json(results);
      });
    request('http://127.0.0.1:5000/recommend', { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }
        recommendations=body.split("|");
        res.send(recommendations);
        });

})
        
module.exports=model;