import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <div className='list-container'>
                <a href="./Home">Home</a>
                <a href="./Product">Product</a>
                <a href="./Image">Image</a>
                <a href="./About">About</a>
            </div>
        </div>
    );
};

export default Header;