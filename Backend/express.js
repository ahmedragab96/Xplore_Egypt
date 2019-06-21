const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

const app = express();

var UserRoutes = require('./routes/user');
var TripsRoutes = require('./routes/trips');
var RestaurantsRoutes=require('./routes/restaurants');
var hotelsRoutes=require('./routes/hotels');
var model=require('./routes/recommend');
var postsRoutes = require('./routes/posts');
var reviewsRoutes=require('./routes/reviews');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client

app.use((req , res ,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
     "GET, POST, PATCH, DELETE, PUT, OPTIONS"
   );
  next();
});

app.use('/users', UserRoutes);
app.use('/trips',  TripsRoutes);
app.use('/restaurants',RestaurantsRoutes);
app.use('/hotels',hotelsRoutes);
app.use('/recommend',model);
app.use('/posts', postsRoutes);
app.use('/reviews',reviewsRoutes);

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));



module.exports = app ;
