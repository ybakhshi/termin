import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import consulateBuilding from '../assets/consulate.jpg';
import passImage from '../assets/passportflag.jpg';
class Home extends Component {
    render() {
        //console.log(this.props.arrayOfAppointments);
        return (
            <div className ="jumbotron jumbotron-fluid bg-white  pt-3 ">
                <div className ="container border">
                
                    <div className="px-3 py-0 rounded p-5">
                        <div className="card-deck ">
                            <div className="card ">
                                <div className="card-body ">
                                    <h3 dir ="ltr" className="text-left">Dear All,</h3>
                                    <p dir ="ltr" className ="text-left text-small">
                                    Welcome to the Appointment Management System of the Consulate General of 
                                    the Islamic Republic of Afghanistan in Munich, Germany. 
                                    You can book your appointment for the consular services here.  
                                    </p>
                                </div>
                            </div>
                            <div className="card ">
                                <div className="card-body text-right font-weight-bold" dir ="rtl">
                                <h3 className = "font-weight-bold">مراجعین گرامی!</h3>
                                <p > به سیستم مدیریت وقت ملاقات های جنرال قونسلگری جمهوری اسلامی افغانستان در مونشن-المان، خوش آمدید.</p>
                                <p>برای خدمات قونسلی از اینجا وقت ملاقات گرفته میتوانید.</p>
                                
                                </div>
                            </div>
                            
                            <div className="card ">
                                <div className="card-body text-right font-weight-bold" dir ="rtl">
                                <h3 className = "font-weight-bold">ښاغليو / آغلو  مراجعينو !</h3>
                                <p>د المان هيواد په مونشن كي د افغانستان د اسلامي جمهوريت د جنرال قونسلګرۍ دکتنې (ملاقات) د وخت اخيستي څانګي ته ښه راغلاست.</p> 
                                <p> د قونسلی د چارو لپاره د کتنی (ملاقات) وخت لدی ځای څخه اخیستلی شی. </p>
                                
                                </div>
                            </div>
                        </div> 
                    </div>
                    
                    {/* <div className="bg-light p-4 rounded text-right" dir="rtl"> */}
                      
                    
                    <hr className ="bg-primary mt-0 mx-5"/>
                    <div className="row mb-3 p-5 ">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <div className="card-title m-auto text-center text-white">
                                        <Link className="btn btn-outline-primary form-control" to="/appointment"> 
                                            <h3 className ="text-white">Appointment | وقت ملاقات</h3>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-body bg-light">
                                    
                                        <img className="img-fluid rounded" src={consulateBuilding} alt="Consulate building"/>
                                    
                                </div>
                                <div className="card-footer">
                                    <Link className="btn btn-outline-primary form-control" to="/appointment"> Click Here | اینجا کلیک کنید</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pass-track">
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <div className="card-title m-auto text-center text-white">
                                        <Link className="btn btn-outline-primary form-control" to="/passport">
                                            <h3 className ="text-white">Status | پیگیری چاپ پاسپورت</h3>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-body bg-light">
                                    
                                        <img className="img-fluid rounded" src={passImage} alt="Passport"/>
                                    
                                </div>
                                <div className="card-footer ">
                                    <Link className="btn btn-outline-primary form-control" to="/passport"> Click Here | اینجا کلیک کنید</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps =(state) =>{
    //Object.values returns an array from an object!
    return {arrayOfAppointments : Object.values(state.appointments)};
}
export default connect(mapStateToProps)(Home);