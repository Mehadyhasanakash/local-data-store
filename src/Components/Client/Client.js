import React, { useEffect, useState } from 'react';
import ShowClient from '../ShowClient/ShowClient';
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
            <div className='show-Components-client-container'>
                {
                    clients.map(client => <ShowClient 
                        client={client}
                        key={client.id}
                        ></ShowClient>)
                }
            </div>

            <div className='calculation'>
                <h1>this is me</h1>
            </div>
        </div>


    );
};

export default Client;