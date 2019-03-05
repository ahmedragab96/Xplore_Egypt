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
  user: 'ragab',
  password: '1A2S3D!a',
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

app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+ '/front.html'));
});

app.post('/', function(req, res) {

var jsondata = req.body;
console.log(jsondata);
var values = [];

for(var i=0; i< jsondata.length; i++)
  values.push([jsondata[i].title,
               jsondata[i].duration,
               jsondata[i].price,
               jsondata[i].experiences,
               jsondata[i].fullDescription,
               jsondata[i].includes,
               jsondata[i].imageURL]);

  console.log(values);             
//Bulk insert using nested array [ [a,b],[c,d] ] will be flattened to (a,b),(c,d)
db.query('INSERT INTO trips (title, duration, price , experience , disc , include , image) VALUES ?', [values], function(err,result) {
  if(err) {
     res.send('Error');
  }
 else {
     res.send('Success');
  }
});
});
