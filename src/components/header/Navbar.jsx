import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    const [collapsed, setCollapsed] = React.useState(true);
    const toggleNavbar =()=> {
        setCollapsed(!collapsed)
    }
    
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark" >
            <div className ="container">
                <a className="navbar-brand" href="https://www.munich.mfa.af" target="_blank" rel="noopener noreferrer"> Website</a>
                
                <button 
                    //className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#collapsibleNavbar" 
                    onClick={toggleNavbar} 
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    className={`${classTwo}`}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${classOne}`} id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink 
                            onClick={toggleNavbar} 
                            exact className="nav-link" 
                            to="./" activeClassName ="main-nav-active"
                        >HOME
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            onClick={toggleNavbar} 
                            className="nav-link" 
                            to="./appointment" 
                            activeClassName ="main-nav-active"
                            
                        >APPOINTMENT
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            onClick={toggleNavbar} 
                            className="nav-link" 
                            to="./passport" 
                            activeClassName ="main-nav-active"
                            
                        >PASSPORT STATUS
                        </NavLink>
                    </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    );
    
};

export default Navbar;
