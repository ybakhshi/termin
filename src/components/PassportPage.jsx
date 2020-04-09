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
                <div className ="pl-5 pr-5 pt-4 pb-4 ">
                    
                        <div className="form-group">
                            <label htmlFor="searchbox">Please enter the Applicant ID: | اپلیکن آی دی تانرا تایپ کنید</label>
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
                        <img className="img-fluid rounded mx-auto d-block" src={guideImage} alt="instruction"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PassportPage;