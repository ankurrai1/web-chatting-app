import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = ()=>{

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <div><input className="joinInput" type="text" placeholder="Name" onChange={}></input></div>
                <div><input className="joinInput" type="text  mt-20" placeholder="Room" onChange={}></input></div>
                <Link>
                   <button className="button mt-20" type="submit">Sign in</button>
                </Link>
            </div>
        </div>
        
    )
}

export default Join;