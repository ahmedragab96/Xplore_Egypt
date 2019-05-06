var express = require('express');
var reviews = express.Router();
const db = require('../app/config/db');


reviews.post('/add/:user/:item', function (req, res, next) {
    let user_id = req.params.user;
    let item_id = req.params.item;
    console.log(item_id)
    let title = req.body.title;
    let rate = req.body.rate;
    let review = req.body.body;
    let photo = req.body.photo;
    let type = req.body.type;
    let query = "INSERT INTO reviews (itemid , userid , title , rate , review , photo , type) VALUES( '" + item_id + "', '" + user_id + "', '" + title + "', '" + rate + "', '" +
        review + "', '" + photo + "', '" + type + "' )";
    db.query(query, (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).send(err);
        }
        else {
            res.status(200).json({
                result
            })
        }
    });
});

reviews.get('/getUserReviews/:id', (req, res) => {
    let user_id = req.params.id;
    let query = "SELECT itemid,title,rate,review,type,date,photo FROM reviews WHERE userid=?";
    db.query(query, [user_id], (error, results) => {
        if (error) { return res.status(500).send(err); }
        res.json(results)
    });

});

reviews.get('/getPlaceReviews/:id', (req, res, next) => {
    let place_id = req.params.id;
    let query = "SELECT userid,title,rate,review,type,date,photo FROM reviews WHERE itemid=?";
    db.query(query, [place_id], (error, results) => {
        if (error) { return res.status(500).send(err); }
        res.json(results)
    });


});
// To edit in reviews 
reviews.put('/edit/:user/:item', (req, res) => {
    let user_id = req.params.user;
    let item_id = req.params.item;
    let title = req.body.title;
    let rate = req.body.rate;
    let review = req.body.body;
    let photo = req.body.photo;
    let type = req.body.type;
    let query = "UPDATE reviews SET title = '" + title + "' , rate = '" + rate + "' , review = '" + review + "' , photo = '" + photo + "' , type = '" + type + "' " +
        "WHERE userid = '" + user_id + "' AND itemid = '" + item_id + "'";
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Edited");
    });


});
module.exports = reviews;