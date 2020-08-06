import React,{useState, useEffect} from 'react';
import axios from 'axios';
import config from '../../config.json';
const DeleteTheAppointment = ({email, selectedService}) => {
    const [result, setResult] =useState("");
    useEffect(()=>{
        (async(email, selectedService)=>{
            const response = await axios({
                method: 'post',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: config.apiEndPoint+'/deleteappointmentbyemail.php',
                data: {email: email, selectedService: selectedService}
            });
        setResult(response.data);
        })(email, selectedService);
             
    },[email, selectedService]);
    
    return (
        <div dir ="rtl" className ="text-center m-5">
            {
                result ==="deleteSuccess" ? 
                <div className="text-success">وقت ملاقات شما از سیستم پاک گردید. | Your appointment is deleted successfully</div> 
                :<div className="text-danger">وقت ملاقات شما قبلا از سیستم خذف یا چنین وقت ملاقاتی  در سیستم وجود ندارد. | There is no active appointment 
                with such email or it was already deleted</div>
            }
        </div>
    );
};

export default DeleteTheAppointment;