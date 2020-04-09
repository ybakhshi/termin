import React, {useState, useEffect} from 'react';
import axios from 'axios';
import config from '../../config.json';
import { getDay, addDays} from 'date-fns';
import ReactDatePciker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './formFunctions.css';


// react-date-picker library is used here. its dependecy  is date-fns
const DatePicker = ({input, label, meta, service}) => {
    const[disableTheseDates, setTheseDates] = useState([]);
    
    const className = `form-control form-control-lg ${meta.error && meta.visited ? 'is-invalid': ''}`;
    //filter weekend dates
    const isWeekday = (date) => {
        const day = getDay(date);
        return day !== 0  && day !== 6;
    };
    
    useEffect(()=>{
        
        ((service)=>{
            const disableBookedDates =[];
            // fOR LIVE PHP SERVER
            axios.post(config.apiEndPoint+'/disablefullybookeddates.php',{service})
            .then(response =>{
                response.data.forEach(eachDate =>{
                    disableBookedDates.push(addDays(new Date(),eachDate));
                })
            });
            //FOR LOCAL PHP SERVER
            // axios({
            //     method: 'post',
            //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            //     url: config.apiEndPoint+'/disablefullybookeddates.php',
            //     data: {service: service}
            // })
            // .then(response =>{
            //     console.log(response.data);
            //     response.data.forEach(eachDate =>{
            //         disableBookedDates.push(addDays(new Date(),eachDate));
            //     })
            // });

            setTheseDates(disableBookedDates);
        })(service);
        
    },[service]);
   // remove moment latter
    return (
            <div className= "form-group">
                <label htmlFor={input.name}>{label}</label>               
                <ReactDatePciker  
                    selected={input.value || null}
                    dateFormat="dd/MM/yyyy"
                    onChange ={input.onChange}
                    filterDate={isWeekday}
                    minDate={new Date()}
                    className ={className}
                    placeholderText ="dd/mm/yyyy"
                    isClearable
                    name ={input.name}
                    locale ={input.fi}
                    autoComplete ="off"
                    excludeDates ={disableTheseDates}
                    
                />
                <div className ="text-danger small message error">
                    {meta.touched || meta.visited ? meta.error : ''}
                </div>
            </div>  
    );
    
    
};

export default React.memo(DatePicker);
