require('dotenv').config();
const express = require ('express');
const bodyParser = require('body-parser');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  


const app = express();

const port = 8081;



app.use(bodyParser.urlencoded({extended: true}))

require('./app/routes')(app,{});

app.listen(port, () => {
    console.log("Server listening on port " + port);
})