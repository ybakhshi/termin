import React,{useState} from 'react';
import data from '../../data.json';
import DeleteModale from './DeleteModale';
import DeleteTheAppointment from './DeleteTheAppointment';

const CancelAppointment = () => {
    const serviceKeys = Object.keys(data);
    const [email, setEmail] = useState("");
    const [service, setService] = useState("");
    const [emailError, setEmailError] = useState("");
    const [serviceError, setServiceError] = useState("");
    const [flag, setFlag] = useState(false);
    const [showModel, setShowModel] = useState(false);
    
    function handleChange(e){
        setEmailError("");
        setServiceError("");
        setFlag(false);
        if(e.target.name === "email")
        setEmail(e.target.value);
        else
        setService(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!email || email.trim() ==="")
            setEmailError("لطفا ایمیل آی دی تانرا اول تایپ کنید.");
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
            setEmailError("لطفا یک ایمیل آی دی درست تایپ کنید.");
        else if(!service || service.trim() ===""){
            setServiceError("لطفا موضوعی را که برایش وقت ملاقات گرفته بودید را انتخاب کنید.");
        }
        else
        {   
            setShowModel(true);
            
        }
    }
    const isDeleteConfirmed =(answer)=>{
        setShowModel(false);
        if(answer ==="YES"){
            setFlag(true);
        }
    }
    return (
        <div className ="jumbotron jumbotron-fluid bg-white  pt-3 ">
            <div    className ="container border " >
                <div className ="pl-5 pr-5 pt-5 pb-4 ">
                    <h2 className ="text-center"> لغو وقت ملاقات | Cancelling Appointment </h2>
                    <p dir ="rtl" className="text-center">اگر به وقت ملاقات تان حاضر شده نمی توانید و می خواهید آنرا لغو و از سیستم خذف کنید، لطفا ایمیل و موضوعی که برایش قبلا وقت ملاقات اخذ نموده اید را، 
                        اینجا وارد و روی دکمه submit کلیک کنید.
                    </p>
                    <form  className="" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="email" 
                                placeholder="Email" 
                                name="email" 
                                value={email} 
                                onChange ={handleChange}
                                
                            />
                            <div className="invalid-feedback">Please fill out this field.</div>
                            <div dir="rtl"  className="text-center text-danger small message ">{ emailError ? emailError: ""}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="selectedService">Services | خدمات:</label>
                            <select 
                                value={service} 
                                onChange ={handleChange}
                                className="form-control" 
                                id="selectedService" 
                                name="selectedService" 
                                
                            >
                                <option value=""  defaultValue hidden>Select a Service</option>
                                {serviceKeys.map((key) =>(
                                    <option 
                                        key={key} 
                                        value ={key}> 
                                        {data[key]}
                                    </option>
                                ))}
                            </select>
                            <div dir="rtl"  className="text-center text-danger small message ">{ serviceError ? serviceError: ""}</div>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                        >Submit
                        </button>
                    </form>
                    {showModel && <DeleteModale show ={true} isDeleteConfirmed ={isDeleteConfirmed}/>}
                    {flag && <DeleteTheAppointment email ={email} selectedService = {service} />}
                        
                </div>
            </div>
        </div>
    );
};

export default CancelAppointment;