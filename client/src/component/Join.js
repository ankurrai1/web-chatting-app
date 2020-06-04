import React, { useState } from 'react';
import link from 'react-router-dom';

const Join = ()=>{

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <div><input className="joinInput" type="text" placeholder="Name" onChange={}></input></div>
                <div><input className="joinInput" type="text  mt-20" placeholder="Room" onChange={}></input></div>
            </div>
        </div>

    )
}

export default Join;