import React from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import logo from '../../assets/ams_logo_simple.png';
import 'semantic-ui-css/semantic.min.css';
import './Header.css'
const Header = () => {
    return (
        <header>
            <TopBar/>
            <div className = "header-bg">
                <div className ="container">
                    <div className="d-flex flex-row">
                        <div className ="mx-auto ">
                            <img className ="img-fluid" src={logo} alt="logo"/>
                        </div>
                        <div className ="align-self-end ">
                            <a href="https://www.facebook.com/AfghanistanInMunichDE/" target="_blank" rel="noopener noreferrer"><i className="facebook icon"/></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <hr style = {{margin :"0", backgroundColor: "#ac1010", height:"2px"}}/>
            <Navbar/>
        </header>
    );
};

export default Header;