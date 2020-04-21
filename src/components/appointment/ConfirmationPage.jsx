import React from 'react';
import serviceData from '../../data.json';
import './ConfirmationPage.css';
const ConfirmationPage = ({formData}) => {
    
    const subject = formData.service;
    return (
        <div className ="jumbotron jumbotron-fluid bg-white  pt-3 ">
            <div className ="container border pb-4">
                <div className="bg-primary p-3 rounded">
                    <div className="progress ">
                        <div className="progress-bar bg-success " style={{width:`100%` }}>100%</div>
                    </div>
                </div>
                <hr className ="bg-primary"/>
                <div className="bg-light p-4 rounded">
                    <h4 className ="mb-4 text-center">Appointment Confirmation</h4>
                    <p>Dear Mr./Mrs. {formData.firstName + " " +formData.lastName},</p>
                    <p>You have just booked an appointment for  
                        <div className ="value-text"> {serviceData[subject]} </div> 
                        at General Consulate of I.R. Afghanistan in Munich.
                    </p>
                    <p>Your appointment is on  
                        <div className ="value-text"> {formData.weekDay} </div>,  
                        <div className ="value-text"> {formData.newDate} </div> 
                    </p>
                    
                    <h5>Notes:</h5>
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
                <hr className ="bg-primary"/>   
                <div className ="row">
                    <div className="col-md-6">
                        <div dir="rtl" className="text-right bg-light p-3 rounded ">
                            <p><b>هموطن گرامی،</b></p>
                            <p>وقت ملاقات شما با مشخصات زیر موفقانه در سیستم ما ثبت شد:</p>
                            <ul>
                                <li>نام و نام فامیلی: &emsp; <div className ="value-text">{formData.firstName + " " +formData.lastName}</div></li>
                                <li>تاریخ ملاقات: &emsp; <div className ="value-text">{formData.newDate}</div></li>
                                <li>موضوع ملاقات: &emsp;<div className ="value-text">{serviceData[subject]}</div></li>
                                <li>اعضای فامیل: &emsp;<div className ="value-text">{formData.companions ==="none"? "ندارد": formData.companions}</div></li>
                            </ul>
                            <p className=""> لطفا بین ساعت 9:00 صبح الی 12:30 در جنرال قونسلی تشریف داشته باشید.</p>
                            بااحترام<br/>
                            بخش تنظیم ملاقات ها <br/>
                            <p>جنرال قونسلگری جمهوری اسلامی افغانستان مقیم مونشن-المان</p>
                            <h5><b>نکته:</b></h5>
                            <p>لطفا فورم مربوطه را از اینجا دانلود ،خانه پری و در روز ملاقات با خود داشته باشید. 
                            <a  href="https://www.munich.mfa.af/fa/consular-affairs/consular-affairs.html" 
                                target="_blank" rel="noopener noreferrer"> امور قونسلی و فورم ها
                            </a> 
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div dir="rtl" className="text-right bg-light p-3 rounded mb-3">
                            <p><b>محترمو هیوادوالو!</b></p>
                            <p>ستاسو د ملاقات وقت زمونژ په سیستم کی په لاندی جزیاتو ثبت شو:</p>
                            <ul>
                                <li>نوم او تخلص: &emsp; <div className ="value-text">{formData.firstName + " " +formData.lastName}</div></li>
                                <li>د ملاقات نیټه: &emsp; <div className ="value-text">{formData.newDate}</div></li>
                                <li>د ملاقات موضوع: &emsp;<div className ="value-text">{serviceData[subject]}</div></li>
                                <li>د فامیل غړی:  &emsp;<div className ="value-text">{formData.companions ==="none"? "نلروم": formData.companions}</div></li>
                            </ul>
                            <p className=""> مهربانی وکړی د سهاد د ۹:۰۰ بجو څخه د غرمی تر ۱۲:۳۰ بجو پوری د افغانستان د اسلامی جمهوریت په قونسلګری کی تشریف ولری. 
                            </p>
                            بااحترام<br/>
                            د ملاقاتونو د تنظیم څانګه <br/>
                            <p>په مونش-المان کی د افغانستان د اسلامی جمهوریت جنرال قونسلګری</p>
                            <h5><b>نکته:</b></h5>
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