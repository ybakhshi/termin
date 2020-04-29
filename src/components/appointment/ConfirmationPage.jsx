import React from 'react';
import serviceData from '../../data.json';
import './ConfirmationPage.css';
const ConfirmationPage = ({formData}) => {
    
    const subject = formData.service;
    return (
        <div className ="jumbotron jumbotron-fluid bg-white  pt-3 ">
            <div className ="container border pb-4 confirm-container">
                <div className ="row">
                    <div className="bg-primary p-3 rounded progress-container">
                        <div className="progress ">
                            <div className="progress-bar bg-success " style={{width:`100%` }}>100%</div>
                        </div>
                    </div>
                </div>
                
                <div className = "english-content">
                    <div className="bg-light p-4 rounded">
                        <div className="inner-content">
                            <h2 className ="mb-4 text-center">Appointment Confirmation</h2>
                            <p>Dear Mr./Mrs. {formData.firstName + " " +formData.lastName},</p>
                            <p>You have just booked an appointment for  
                                <span className ="value-text"> {serviceData[subject]} </span> 
                                at General Consulate of I.R. Afghanistan in Munich.
                            </p>
                            <p>Your appointment is on  
                                <span className ="value-text"> {formData.weekDay} </span>,  
                                <span className ="value-text"> {formData.newDate} </span> 
                            </p>
                            
                            <h3>Notes:</h3>
                            <ul>
                                <li>We expect you to be at consulate between 9:00am to 12:30pm. </li>
                                <li>You can download and fill the required form from here: 
                                    <a  href="https://www.munich.mfa.af/consular-affairs.html" 
                                        target="_blank" rel="noopener noreferrer"> Consulate Affairs 
                                    </a>
                                </li>
                            </ul>
                            <p>Best regards</p>
                            Appointment Section<br/>
                            Consulate General of the Islamic Republic of Afghanistan in Munich, Germany
                        </div>
                    </div>
                </div>    
                   
                <div className ="row">
                    <div className="col-12">
                        <div dir="rtl" className="text-right bg-light rounded ps-fa-content">
                            <p><b>هموطن گرامی،</b></p>
                            <p>وقت ملاقات شما با مشخصات زیر موفقانه در سیستم ما ثبت شد:</p>
                            <ul>
                                <li>نام و نام فامیلی: &emsp; <span className ="value-text">{formData.firstName + " " +formData.lastName}</span></li>
                                <li>تاریخ ملاقات: &emsp; <span className ="value-text">{formData.newDate}</span></li>
                                <li>موضوع ملاقات: &emsp;<span className ="value-text">{serviceData[subject]}</span></li>
                                <li>اعضای فامیل: &emsp;<span className ="value-text">{formData.companions ==="none"? "ندارد": formData.companions}</span></li>
                            </ul>
                            <p className=""> لطفا بین ساعت 9:00 صبح الی 12:30 در جنرال قونسلی تشریف داشته باشید.</p>
                            <p>بااحترام <br/>
                            بخش تنظیم ملاقات ها <br/>
                            جنرال قونسلگری جمهوری اسلامی افغانستان مقیم مونشن-المان<br/>
                            </p>
                            <h3><b>نکته:</b></h3>
                            <p>لطفا فورم مربوطه را از اینجا دانلود ،خانه پری و در روز ملاقات با خود داشته باشید. 
                            <a  href="https://www.munich.mfa.af/fa/consular-affairs/consular-affairs.html" 
                                target="_blank" rel="noopener noreferrer"> امور قونسلی و فورم ها
                            </a> 
                            </p>
                        </div>
                    </div>
                </div>
                <div className = "row">
                    <div className="col-12">
                        <div dir="rtl" className="text-right bg-light  rounded ps-fa-content">
                            <p><b>محترمو هیوادوالو!</b></p>
                            <p>ستاسو د ملاقات وقت زمونژ په سیستم کی په لاندی جزیاتو ثبت شو:</p>
                            <ul>
                                <li>نوم او تخلص: &emsp; <span className ="value-text">{formData.firstName + " " +formData.lastName}</span></li>
                                <li>د ملاقات نیټه: &emsp; <span className ="value-text">{formData.newDate}</span></li>
                                <li>د ملاقات موضوع: &emsp;<span className ="value-text">{serviceData[subject]}</span></li>
                                <li>د فامیل غړی:  &emsp;<span className ="value-text">{formData.companions ==="none"? "نلروم": formData.companions}</span></li>
                            </ul>
                            <p className=""> مهربانی وکړی د سهاد د ۹:۰۰ بجو څخه د غرمی تر ۱۲:۳۰ بجو پوری د افغانستان د اسلامی جمهوریت په قونسلګری کی تشریف ولری. 
                            </p>
                            <p>
                                بااحترام<br/>
                                د ملاقاتونو د تنظیم څانګه <br/>
                            په مونش-المان کی د افغانستان د اسلامی جمهوریت جنرال قونسلګری <br/>
                            </p>
                            <h3><b>نکته:</b></h3>
                            <p>لطفا فورم مربوطه را از اینجا دانلود ،خانه پری و در روز ملاقات با خود داشته باشید. 
                                <a  href="https://www.munich.mfa.af/ps/consular-affairs/consular-affairs.html" 
                                    target="_blank" rel="noopener noreferrer">  د قونسلي نورې چارې
                                </a> 
                            </p>
                        </div>
                    </div>
                    
                </div>       
                
            </div>
        </div>
        
        
    );
};

export default ConfirmationPage;