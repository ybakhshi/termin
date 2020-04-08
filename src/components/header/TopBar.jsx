import React from 'react';
import topbar from '../../assets/topbar_10_10px.jpg';
import './TopBar.css';
const TopBar = () => {
    return (
        <div  className = "top-bar" >
            <img src={topbar} alt="tobbar"/>
        </div>
    );
};

export default TopBar;