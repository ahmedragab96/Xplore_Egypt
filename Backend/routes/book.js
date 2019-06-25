var express = require('express');
var book = express.Router();
const request = require('request');

book.get('/getFirstLink/:title', (req, res) => {
    let title = req.params.title;
    
    request("https://www.googleapis.com/customsearch/v1?cx=010207221007117448908%3Aquimk_k6jty&key=AIzaSyCB8aGtZX4yiHJWdtLPgT1JyU9IE6JelVk&q="+title, { json: true }, (err, resp, body) => {
        if (err) { return console.log(error); }
        var link={"link":body.items[0].formattedUrl};
        res.json(link);

    });
    

});
module.exports = book;