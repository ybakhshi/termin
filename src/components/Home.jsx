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
                        <h4>مراجعین گرامی،</h4>
                        <p > به بخش سیستم مدیریت وقت ملاقات های جنرال قونسلی جمهوری اسلامی افغانستان در مونیخ، خوش آمدید.
امیدواریم که با ارائه سیستم آنلاین تنظیم ملاقات ها؛ سهولتی را برای شما به وجود آورده باشیم.
                        </p>
                        <h4>ښاغليو / آغلو  مراجعينو !</h4>
                        <p>
                        د المان هيواد په مونشن كي د افغانستان د اسلامي جمهوريت د جنرال قونسلګرۍ دکتنې (ملاقات) د وخت اخيستي څانګي  ته ښه راغلاست. 
هيله لرو چي ستاسو لپار مو د انټرنيټي سيستم له لاري د کتني (ملاقات) په پروسه کي آسانتيا را منځته کړي وي .
                        </p>
                        <h4 dir ="ltr" className="text-left">Dear All,</h4>
                        <p dir ="ltr" className ="text-left">
                            Welcome to Appointment Management System of General Consulate of I.R. of Afghanistani in Munich.
                            We encourage you to make an appointment in advance before approaching us for any sort of consulate services.
                        </p>
                    </div>
                    <hr/>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <div className="card-title m-auto text-center text-white">Appointment | وقت ملاقات</div>
                                </div>
                                <div className="card-body bg-light">
                                    <img className="img-fluid rounded" src={consulateBuilding} alt="Consulate building"/>
                                </div>
                                <div className="card-footer">
                                    <Link className="btn btn-outline-primary form-control" to="/appointment"> Click Here | اینجا کلیک کنید</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <div className="card-title m-auto text-center text-white">Passport Status | پیگیری چاپ پاسپورت</div>
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