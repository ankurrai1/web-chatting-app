const express = require("express");
const dotenv = require("dotenv");


dotenv.config({path: ".env"});
const app = express();

let port = process.env.PORT;
app.set('port', port);

app.get('/', function(req, res){ 
    res.send('<html>all is well...</html>');
});

module.exports = app;
