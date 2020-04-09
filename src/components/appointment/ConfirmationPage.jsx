import React from 'react';
import serviceData from '../../data.json';
import './ConfirmationPage.css';
const ConfirmationPage = ({formData}) => {
    
    const subject = formData.service;
    return (
        <div className ="jumbotron jumbotron-fluid bg-white  pt-3 ">
            <div className ="container border pb-4">
                <div className="bg-light p-4 rounded">
                    <div className="progress bg-light">
                        <div className="progress-bar bg-success " style={{width:`100%` }}>100%</div>
                    </div>
                </div>
                <hr className ="bg-primary"/>
                <div className="bg-light p-4 rounded">
                    <h4 className ="mb-4 text-center">Appointment Confirmation</h4>
                    <p>Dear Mr./Mrs. {formData.firstName + " " +formData.lastName},</p>
                    <p>You have just booked an appointment for  
                        <span className ="font-weight-bolder "> {serviceData[subject]} </span> 
                        at General Consulate of I.R. Afghanistan in Munich.
                    </p>
                    <p>Your appointment is on  
                        <span > {formData.weekDay} </span>,  
                        <span > {formData.newDate} </span> 
                    </p>
                    
                    <h5>Important Notes:</h5>
                    <ul>
                        <li>We expect you to be at consulate between 9:00am to 12:30pm. </li>
                        <li>You can download and fill the required forms from our webstie</li>
                    </ul>
                    <p>Best regards</p>
                    Admin<br/>
                    Consulate General of The I.R. of Afghanistan, Munich
                </div>    
                <hr className ="bg-primary"/>   
                <div dir="rtl" className="text-right bg-light p-4 rounded mb-3">
                    <p><strong>هموطن گرامی،</strong></p>
                    <p>وقت ملاقات شما با مشخصات زیر موفقانه در سیستم ما ثبت شد:</p>
                    <ul>
                        <li>نام و نام فامیلی: &emsp; <strong>{formData.firstName + " " +formData.lastName}</strong></li>
                        <li>تاریخ ملاقات: &emsp; <strong>{formData.newDate}</strong></li>
                        <li>موضوع ملاقات: &emsp;<strong>{serviceData[subject]}</strong></li>
                        <li>اعضای فامیل: &emsp;<strong>{formData.companions ==="none"? "ندارد": formData.companions}</strong></li>
                    </ul>
                    <p className=""> لطفا بین ساعت 9:00 صبح الی 12:30 در جنرال قونسلی تشریف داشته باشید.</p>
                    <p>بااحترام</p>
                    ادمین <br/>
                    جنرال قونسلی جمهوری اسلامی افغانستان  - مونیخ
                </div>       
                
            </div>
        </div>
        
        
    );
};

export default ConfirmationPage;