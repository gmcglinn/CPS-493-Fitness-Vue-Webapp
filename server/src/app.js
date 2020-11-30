console.log("api is running")
const express = require('express')
const cors = require('cors')
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

app.use(express.json());
app.use(cors())

app.post('/register', (req, res) => {   
    connection.query(`INSERT INTO UserProfile (EmailAddress, Password, Username)
    VALUES ('${req.body.email}', '${req.body.password}', '${req.body.username}')`, function (error, results, fields) {
    if (error) throw error;
    res.send(results)
});
})

app.post('/login', (req, res) => {
    connection.query(`SELECT UserID, Username, Administrator FROM UserProfile WHERE Username = '${req.body.username}' AND Password='${req.body.password}'`, function (error, results, fields) {
    if (error) throw error;
    res.send(results)
    });
})

app.get('/getLatest', (req, res) => {
    connection.query(`SELECT PostID FROM Post ORDER BY CreatedTime DESC LIMIT 10`, function (error, results, fields) {
    if (error) throw error;
    res.send(results)
    });
})

app.post('/getLatestUser', (req, res) => {
    console.log(req.body.IDUser);
    var result = [];
    for(var i in req.body.IDUser)
        result.push([i, json_data [i]]);
    temp = result.join(" OR CreatorID = ");
    connection.query(`SELECT PostID FROM Post WHERE CreatorID = '${temp}' ORDER BY CreatedTime DESC LIMIT 10`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
    
})
app.post('/getUser', (req, res) => {
    connection.query(`SELECT * FROM UserProfile WHERE UserID = '${req.body.ID}'`, function (error, results, fields) {
    if (error) throw error;
    res.send(results)
    });
})
app.get('/getAllUsers', (req, res) => {
    connection.query(`SELECT UserID FROM UserProfile`, function (error, results, fields) {
    if (error) throw error;
    res.send(results)
    });
})
app.post('/getPost', (req, res) => {
    connection.query(`SELECT * FROM Post WHERE PostID = '${req.body.ID}'`, function (error, results, fields) {
    if (error) throw error;
    res.send(results)
    });
})
app.post('/getUser', (req, res) => {
    connection.query(`SELECT * FROM UserProfile WHERE UserID = '${req.body.UserID}'`, function (error, results, fields) {
    if (error) throw error;
    res.send(results)
    });
})
app.post('/getLikedStatus', (req, res) => {
    connection.query(`SELECT * FROM LikedPosts WHERE PostID = '${req.body.IDPost}' AND UserID = '${req.body.IDUser}'`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})

app.post('/getAllLiked', (req, res) => {
    connection.query(`SELECT PostID FROM LikedPosts WHERE UserID = '${req.body.IDUser}'`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})
app.post('/likePost', (req, res) => {
    connection.query(`INSERT INTO LikedPosts (PostID, UserID)
    VALUES ('${req.body.IDPost}', '${req.body.IDUser}')`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})
app.post('/unlikePost', (req, res) => {
    if(req.body.IDUser==null) req.body.IDUser = 0;
    connection.query(`DELETE FROM LikedPosts WHERE PostID = '${req.body.IDPost}' AND UserID = '${req.body.IDUser}'`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})
app.post('/searchPosts', (req, res) => {
    connection.query(`SELECT * FROM Post WHERE Title LIKE '%${req.body.field}%' OR CreatorUsername LIKE '%${req.body.field}%'`, function (error, results, fields) {
    if (error) throw error;
    res.send(results)
    });
})

app.post('/getFollowStatus', (req, res) => {
    connection.query(`SELECT Followed FROM UserRelation WHERE Follower = '${req.body.IDUser}'`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})
app.post('/addExercise', (req, res) => {
    connection.query(`INSERT INTO Exercises (Name, isCardio)
    VALUES ('${req.body.newName}', '${req.body.isCardio}')`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})
app.post('/removeExercise', (req, res) => {
    if(req.body.IDUser==null) req.body.IDUser = 0;
    connection.query(`DELETE FROM Exercises WHERE UniqueID = '${req.body.ID}'`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})
app.get('/getAllExercises', (req, res) => {
    connection.query(`SELECT UniqueID FROM Exercises`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})
app.post('/getExercise', (req, res) => {
    connection.query(`SELECT * FROM Exercises WHERE UniqueID = '${req.body.ID}'`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})

app.post('/removeUser', (req, res) => {
    if(req.body.IDUser==null) req.body.IDUser = 0;
    connection.query(`DELETE FROM UserProfile WHERE UserID = '${req.body.IDUser}'`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})
app.post('/toggleAdmin', (req, res) => {
    console.log(req.body.x)
    connection.query(`UPDATE UserProfile SET Administrator = '${req.body.x}' WHERE UserID = '${req.body.IDUser}'`, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
})




app.listen(process.env.PORT || 8081)