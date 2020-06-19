const express = require("express");
const dotenv = require("dotenv");
const socketio = require("socket.io");


dotenv.config({path: ".env"});
const app = express();

let io  = app.io = socketio();

const {addUser, getUser, getUsersInRoom, removeUser} = require("./src/Models/User");

io.on( "connection", function( socket ) {
    socket.on('join', ({name, room})=>{
        const{error, user} = addUser({id :socket.id, name, room})
        if(error) return callback({error});
        socket.emit("message",{user : "Admin", text :`Welcome ${user.name} to ${ user.room} group !!`})
        socket.join(user.room);
    })

    socket.on('disconnect', ()=>{
        console.log("A user disconnected !!!");
    })
});

let port = process.env.PORT;
app.set('port', port);


const user = require('./src/Routers/user');

app.use(user);


app.get('/', function(req, res){ 
    res.send('<html>all is well...</html>');
});

module.exports = app;
