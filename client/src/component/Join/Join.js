import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = ()=>{

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <div><input className="joinInput" type="text" placeholder="Name" onChange={(event) => setName(event.target.value)}></input></div>
                <div><input className="joinInput" type="text  mt-20" placeholder="Room" onChange={(event) => setRoom(event.target.value)}></input></div>
                <Link onClick={even=>(!name || !room)? event.preventDefault(): null} to={`/chat?name=${name}&room=${room}`} >
                   <button className="button mt-20" type="submit">Sign in</button>
                </Link>
            </div>
        </div>
        
    )
}

export default Join;