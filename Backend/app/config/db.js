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
