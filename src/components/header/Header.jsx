import React from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import logo from '../../assets/ams_logo_simple.png';
import './Header.css'
const Header = () => {
    return (
        <header>
            <TopBar/>
            <div className = "header-bg">
                <div className ="container"><img className ="img-fluid" src={logo} alt="logo"/></div>
            </div>
            <hr style = {{margin :"0", backgroundColor: "#ac1010", height:"2px"}}/>
            <Navbar/>
        </header>
    );
};

export default Header;