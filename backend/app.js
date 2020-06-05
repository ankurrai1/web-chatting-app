const express = require("express");
const dotenv = require("dotenv");
const socketio = require("socket.io");


dotenv.config({path: ".env"});
const app = express();

let io  = app.io = socketio();

io.on( "connection", function( socket ) {
    console.log( "A user connected" );

    socket.on('join', ({name, room})=>{
        console.log(name +"  " + room);
    })

    socket.on('disconnect', ()=>{
        console.log("A user disconnected !!!");
    })
});

let port = process.env.PORT;
app.set('port', port);

app.get('/', function(req, res){ 
    res.send('<html>all is well...</html>');
});

module.exports = app;
