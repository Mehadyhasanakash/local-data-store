import React, { useEffect, useState } from 'react';
import './Client.css'

const Client = () => {

    const [clients, setClients] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setClients(data));
    } ,[])
    return (
        <div className='client-container'>
            <div>
                <h1>show client</h1>
                {
                    clients.map(client => console.log(client))
                }
            </div>

            <div className='calculation'>
                <h1>this is me</h1>
            </div>
        </div>


    );
};

export default Client;