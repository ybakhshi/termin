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
                    <div className="bg-light p-4 rounded text-right" dir="rtl">
                    <div className="card-deck">
                        <div className="card bg-light border-0 m-0">
                            <div className="card-body p-1">
                            <h5>مراجعین گرامی،</h5>
                            <p > به بخش سیستم مدیریت وقت ملاقات های جنرال قونسلی جمهوری اسلامی افغانستان در مونیخ، خوش آمدید.
                            <p>امیدواریم که با ارائه سیستم آنلاین تنظیم ملاقات ها؛ سهولتی را برای شما به وجود آورده باشیم.</p>
                            </p>
                            </div>
                        </div>
                        <div className="card bg-light border-0 m-0">
                            <div className="card-body p-1">
                            <h5>ښاغليو / آغلو  مراجعينو !</h5>
                            <p>
                            د المان هيواد په مونشن كي د افغانستان د اسلامي جمهوريت د جنرال قونسلګرۍ دکتنې (ملاقات) د وخت اخيستي څانګي  ته ښه راغلاست. 
                            <p> هيله لرو چي ستاسو لپار مو د انټرنيټي سيستم له لاري د کتني (ملاقات) په پروسه کي آسانتيا را منځته کړي وي .</p>
                            </p>
                            </div>
                        </div>
                        <div className="card bg-light border-0 m-0">
                            <div className="card-body p-1">
                            <h5 dir ="ltr" className="text-left">Dear All,</h5>
                            <p dir ="ltr" className ="text-left">
                                Welcome to Appointment Management System of General Consulate of I.R. of Afghanistani in Munich.
                                We encourage you to make an appointment in advance before approaching us for any sort of consulate services.
                            </p>
                            </div>
                        </div>
                    </div>   
                    </div>
                    <hr className ="bg-primary"/>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <div className="card-title m-auto text-center text-white">
                                        <Link className="btn btn-outline-primary form-control" to="/appointment"> 
                                            <h5 className ="text-white">Appointment | وقت ملاقات</h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-body bg-light">
                                    <a href="/termin/appointment">
                                        <img className="img-fluid rounded" src={consulateBuilding} alt="Consulate building"/>
                                    </a>
                                </div>
                                <div className="card-footer">
                                    <Link className="btn btn-outline-primary form-control" to="/appointment"> Click Here | اینجا کلیک کنید</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <div className="card-title m-auto text-center text-white">
                                        <Link className="btn btn-outline-primary form-control" to="/passport">
                                            <h5 className ="text-white">Status | پیگیری چاپ پاسپورت</h5>
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-body bg-light">
                                    <a href="/termin/passport">
                                        <img className="img-fluid rounded" src={passImage} alt="Passport"/>
                                    </a>
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