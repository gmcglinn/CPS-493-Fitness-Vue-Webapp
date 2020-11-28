console.log("api is running")
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()



const mysql = require('mysql')
require('dotenv').config()
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DB
})


connection.connect()


module.exports = connection;



app.use(morgan('combined'))
app.use(express.json());
app.use(cors())

app.post('/register', (req, res) => {
    /*
    INSERT INTO table_name (column1, column2, column3, ...)
    VALUES (value1, value2, value3, ...);
    */
   
    connection.query(`INSERT INTO UserProfile (EmailAddress, Password, Username)
    VALUES ('${req.body.email}', '${req.body.password}', '${req.body.username}')`, function (error, results, fields) {
    if (error) throw error;
    res.send(results)
});
})

app.post('/login', (req, res) => {
    connection.query(`SELECT UserID, Username FROM UserProfile WHERE Username = '${req.body.username}' AND Password='${req.body.password}'`, function (error, results, fields) {
    if (error) throw error;
    res.send(results)
    });
})


app.listen(process.env.PORT || 8081)