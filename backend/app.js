const express = require("express");
const dotenv = require("dotenv");
const socketio = require("socket.io");


dotenv.config({path: ".env"});
const app = express();

let io  = app.io = socketio();

const {addUser, getUser, getUsersInRoom, removeUser} = require("./src/Models/User");

io.on( "connection", function( socket ) {
    socket.on('join', ({name, room}, callback)=>{
        const{error, user} = addUser({id :socket.id, name, room})
        if(error) return callback({error});
        socket.emit("message",{user : "Admin", text :`Welcome ${user.name} to ${ user.room} group !!`});
        socket.broadcast.to(user.room).emit("message", {user : "Admin",text :`${user.name}, has joined`});
        socket.join(user.room);
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        callback();
    })

    socket.on('sendMessage',(message, callback)=>{
        const user = getUser(socket.id);
        io.to(user.room).emit("message",{user : user.name, text : message});
        callback();
    })


    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
    
        if(user) {
          io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
          io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
        }

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
