var express = require('express');
var posts = express.Router();
const db = require('../app/config/db');
const AuthCheck = require("../middleware/check-auth")

// get all posts from posts table
posts.get('/getall', (req , res , next) => {

    let query = "SELECT * FROM posts";


    db.query(query , function (error , results , fields) {
        if (error) throw error ;
        res.json(results);
    });
});

// post a post in posts table
posts.post('/postapost' , function (req , res , next ) {
    const title = req.body.title;
    const body = req.body.body;
    const date = req.body.date;
    const upVoting = req.body.upVoting;
    const downVoting = req.body.downVoting;
    const userID = req.body.userID;
 
    let query = "INSERT INTO `posts` (title, body, date, upVoting , downVoting , userID) VALUES ('" +
                            title + "', '" + body + "','" + date + "','" + upVoting + "','" + downVoting + "','" + userID + "')";
                            
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        else {
            res.status(200).json({
                result
              })
        }  
    });
});

//delete a post from posts table 
posts.delete('/deletepost', function (req , res , next ){
    const postID = req.body.postID;
    let query = "DELETE FROM posts WHERE postID = ?";
    db.query(query, [postID] ,(err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        else {
            res.status(200).json({
                result
              })
        }
    });
});



// update a post from posts table
posts.put('/updatepost', function (req , res , next ){
    const postID = req.body.postID;
    const title = req.body.title;
    const body = req.body.body;
    if(req.body.title && !req.body.body){ //if title onlyyyyyyyyy
        let query = "UPDATE posts SET title = ? WHERE postID = ? ";
        db.query(query, [title, postID],(err, result) => {
            console.log("goa l query");
            if (err) {
                return res.status(500).send(err);
            }
            else {
                res.status(200).json({
                    result
                  })
            }
        });
    }
    else if(req.body.body && !req.body.title){ //if body onlyyyyyyyyy
        let query = "UPDATE posts SET body = ? WHERE postID = ? ";
        db.query(query, [body, postID] ,(err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            else {
                res.status(200).json({
                    result
                  })
            }
        });
    }
    else{ //if both body and title
        let query = "UPDATE posts SET title = ?, body = ? WHERE postID = ? ";
        db.query(query, [title, body, postID] ,(err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            else {
                res.status(200).json({
                    result
                  })
            } 
        });
    }
});

// get all posts from posts table for specific user
posts.get('/getuserposts', (req , res , next) => {

    const userID = req.body.userID;
    let query = "SELECT * FROM posts WHERE userID = ?";

    db.query(query ,[userID], function (error , results , fields) {
        if (error) throw error ;
        res.json(results);
    });
});


module.exports = posts;