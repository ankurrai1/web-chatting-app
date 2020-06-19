import React, { useState, useEffect } from 'react';
import querystring from 'query-string';
import io from 'socket.io-client';


import './Chat.css';

let socket;

const Chat = ( { location } )=>{

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const ENDPOINT = "localhost:9000";

    useEffect(()=>{
        const { name, room } = querystring.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room });

        return ()=>{
            socket.emit('disconnect');
            socket.off(); // just switching off this users socket
        }

    },[ ENDPOINT, location.search ]);

    useEffect(()=>{
        socket.on('message', (message)=>{
            setMessage([...messages , message]);
        })
    },[message]);

    return (
        <div className ="outerContainer">
            <div className="container">
                
            </div>
        </div>
    )
}

export default Chat;