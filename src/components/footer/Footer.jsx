import React from 'react';
import './Footer.css';
import flagLogo from '../../assets/afFlagLogo.jpg'
const Footer = () => {
    return (
        <React.Fragment>
            <footer className ="main-footer ">
                <div className ="sunfw_section_footer" >
                    <div className = "container mt-3">
                        <div className="row">
                            
                        </div>
                    </div>
                </div>
                <div className="sunfw_section_copyright">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12">
                                <p className="text-center">
                                &copy;{new Date().getFullYear()} 
                                - Online Appointment Management System and passport tracking system.
                                <br/>Consulate General of the Islamic Republic of Afghanistan, Munich - Germany.
                            
                                </p>
                                <p className="text-center">
                                    Desinged and developed by Yonus Bakhshi
                                <br/>
                                <img className="img-fluid" src={flagLogo} alt="Afghanistan Flag"/>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;