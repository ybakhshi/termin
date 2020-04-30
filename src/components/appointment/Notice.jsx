import React from 'react';

const Notice = () => {
    return (
        <div className="container mt-5">
            <div className="jumbotron">
                <h2 className="text-center text-danger" dir="rtl">
                    خبرتیا | اطلاعیه | Notice
                </h2>
                <p className="text-center text-lg-center text-danger" dir ="rtl">
بدلیل قرنطینه شدن ایالت بایرن و نا معلوم بودن وضعیت فعلی،
 سیستم ترمین تا اطلاع ثانوی به روی درخواست کنندگان بسته می باشد.
                </p>
                <p className="text-lg-center text-danger">
                    The appointment system is blocked for the time being
                    until next notice because of the COVID-19
                </p>
            </div>
            
        </div>
    );
};

export default Notice;