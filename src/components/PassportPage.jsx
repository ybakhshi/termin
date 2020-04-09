import React, {useState} from 'react';
import guideImage from '../assets/applicationid.png';
import IsPassportPrinted from './appointment/IsPassportPrinted';
const PassportPage = () => {
    const [userInput, setUserInput] = useState("");
    const [error, setError] = useState("");
    const [flag, setFlag] = useState(false);
    function handleClick(){
        if(!userInput || userInput.trim() ==="")
        setError("لطفا آی دی تانرا اول تایپ کنید.");
        else if(userInput.length <= 10)
        setError("لطفا یک آی دی درست تایپ کنید.");
        else
        {   
            setFlag(true);
            
        }
    }
    function handleChange(e){
        setError("");
        setFlag(false);
        setUserInput(e.target.value)
    }
    return (
        <div className ="jumbotron jumbotron-fluid bg-white  pt-3 ">
            <div className ="container border " >
                <div className ="pl-5 pr-5 pt-2 pb-4 ">
                        <h2 className ="text-center"> سیستم پیگیری چاپ پاسپورت</h2>
                        <div className="form-group mt-3">
                            <label htmlFor="searchbox">Applicant ID: | اپلیکن آی </label>
                            <input 
                                type="text" 
                                value={userInput} 
                                onChange ={handleChange} 
                                className="form-control"
                                placeholder ="MUC1651771676"
                            />
                            <div dir="rtl"  className="text-center text-danger small message ">{ error ? error: ""}</div>
                            {flag && <IsPassportPrinted applicationId ={userInput} />}
                        </div>
                        
                        <div className ="form-group">
                            <button  
                                className = "btn btn-primary btn-block" 
                                onClick ={handleClick}
                            >
                                <strong>Search | جستجو</strong>
                            </button>
                        </div>
                            
                    <div className ="">
                        <p dir ="rtl" className ="text-center"> <strong>
                             اپلیکن آی دی تانرا طوریکه در تصویر زیر نشان داده شده است می توانید از روی رسید که هنگام 
                            درخواست پاسپورت دریافت نموده اید، پیدا کنید.
                        </strong>
                        </p>
                        <img className="img-fluid rounded mx-auto d-block" src={guideImage} alt="instruction"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PassportPage;