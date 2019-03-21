//Parse data from JSON POST and insert into MYSQL

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
const mysql = require('mysql');

// var db = mysql.createConnection({
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USER || 'root',
//     password: process.env.DB_PASS || '',
//     database: process.env.DB_NAME || 'places'
//   })
const db = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'XploreEgypt'
});

//Establish MySQL connection
db.connect(function(err) {
   if (err) 
      throw err
   else {
       console.log('Connected to MySQL');
       // Start the app when connection is ready
       app.listen(3000);
       console.log('Server listening on port 3000');
 }
});


app.use((req , res ,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
     "GET, POST, PATCH, DELETE, OPTIONS"
   );
  next();
});


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+ '/front.html'));
});

app.post('/', function(req, res) {

var jsondata = req.body;
console.log(jsondata);
var values = [];

for(var i=0; i< jsondata.length; i++)
  values.push([jsondata[i].keywords,
               jsondata[i].price_cateogry,
               jsondata[i].type,
               jsondata[i].itemid,
               jsondata[i].title,
               jsondata[i].rating,
               jsondata[i].region]);
             
//Bulk insert using nested array [ [a,b],[c,d] ] will be flattened to (a,b),(c,d)
db.query('INSERT INTO place (keywords, price_cateogry , type , itemid , title , rating, region) VALUES ?', [values], function(err,result) {
  if(err) {
     res.send('Error');
     console.log(err)
  }
 else {
     res.send('Success');
  }
});
});
