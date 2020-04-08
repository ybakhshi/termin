import React, {useEffect} from 'react';
import axios from 'axios';
import config from '../../config.json';
import { getDay, addDays} from 'date-fns';
import ReactDatePciker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './formFunctions.css';


// react-date-picker library is used here. its dependecy  is date-fns
const DatePicker = ({input, label, meta, service}) => {
    const className = `form-control form-control-lg ${meta.error && meta.visited ? 'is-invalid': ''}`;
    //filter weekend dates
    const isWeekday = (date) => {
        const day = getDay(date);
        return day !== 0  && day !== 6;
    };
    const disableFullyBookedDates =()=>{
        const disableBookedDates =[];
        const data = {service: service}
        axios.post(config.apiEndPoint+'/disablefullybookeddates.php',data)
        .then(response =>{
            console.log(response.data);
            response.data.forEach(eachDate =>{
                disableBookedDates.push(addDays(new Date(),eachDate));
            })
        });

        // axios({
        //         method: 'post',
        //         // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //         url: config.apiEndPoint+'/disablefullybookeddates.php',
        //         data: {service: service}
        //     })
        //     .then(response =>{
        //         console.log(response.data);
        //         response.data.forEach(eachDate =>{
        //             disableBookedDates.push(addDays(new Date(),eachDate));
        //         })
        //     });
        return disableBookedDates;
    }
    // useEffect(()=>{
    //     const disableFullyBookedDates =()=>{
    //         const disableBookedDates =[];
    //         axios({
    //                 method: 'post',
    //                 headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //                 url: config.apiEndPoint+'/disablefullybookeddates.php',
    //                 data: {service: service}
    //             })
    //             .then(response =>{
    //                 console.log(response.data);
    //                 response.data.forEach(eachDate =>{
    //                     disableBookedDates.push(addDays(new Date(),eachDate));
    //                 })
    //             });
    //         return disableBookedDates;
    //     }
    //     disableFullyBookedDates();
    // },[service]);
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
                    excludeDates ={disableFullyBookedDates()}
                    
                />
                <div className ="text-danger small message error">
                    {meta.touched || meta.visited ? meta.error : ''}
                </div>
            </div>  
    );
    
    
};

export default React.memo(DatePicker);