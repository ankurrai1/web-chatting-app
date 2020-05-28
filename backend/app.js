const express = require("express");
const dotenv = require("dotenv");
const socketio = require("socket.io");


dotenv.config({path: ".env"});
const app = express();

const io  = app.io = socketio();

let port = process.env.PORT;
app.set('port', port);

app.get('/', function(req, res){ 
    res.send('<html>all is well...</html>');
});

module.exports = app;
