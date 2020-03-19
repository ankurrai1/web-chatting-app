const express = require("express");


const app = express();

let port = process.env.PORT ;


app.get('/', function(req, res){
    res.send('<html>all is well...</html>');
});



module.exports = app;
