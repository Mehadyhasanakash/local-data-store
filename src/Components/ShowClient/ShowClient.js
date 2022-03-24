import React from 'react';
import './ShowClient.css'

const ShowClient = (props) => {
    const{thumbnailUrl, title} =props.client
    return (
        <div>
            <img src={thumbnailUrl} alt="" />
            <p>{title}</p>
        </div>
    );
};

export default ShowClient;