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
  database:
});

db.connect((err) => {
  if (err) {
      throw err;
  }
  console.log('Connected to database');
});


module.exports = db ;
