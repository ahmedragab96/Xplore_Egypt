// const mysql = require('mysql');
// require('dotenv').config();

// const db = mysql.createConnection ({

//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });
// db.connect((err) => {
//   if (err) {
//       throw err;
//   }
//   console.log('Connected to database');
// });


// module.exports = db ;

const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection ({

  host: "remotemysql.com",
  user: "XBVQWXBf4L",
  password: "aaYdZBVX6w",
  database: "XBVQWXBf4L"
});
db.connect((err) => {
  if (err) {
      throw err;
  }
  console.log('Connected to database');
});


module.exports = db ;
