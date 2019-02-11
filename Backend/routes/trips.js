var express = require('express');
var trips = express.Router();
const db = require('../app/config/db');
const AuthCheck = require("../middleware/check-auth")

trips.get('/getall', (req , res , next) => {
    
    let query = "SELECT * FROM trips";

    db.query(query , function (error , results , fields) {
        if (error) throw error ;

        res.json(results);
    });
});


module.exports = trips;