import React, { Component } from 'react';
import {connect} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import WizardForm from '../form/WizardForm';
import {returnFormatteWeek } from '../form/formFunctions';
import { englishWeekNames } from './../form/formData';
import ConfirmationPage from './ConfirmationPage';
import axios from 'axios';
import config from '../../config.json';
import './BookAppointment.css';
import {toast} from 'react-toastify';
import {reset} from 'redux-form';

class BookAppointment extends Component { 
    state={};
    render() {
        
        if(this.state.firstName){
            return (
            <ConfirmationPage formData ={this.state}/>
            );
        }
        else
        {
            return (
                <div className="jumbotron jumbotron-fluid bg-white  pt-3">
                    <div className ="container">
                        <WizardForm onSubmit = {this.onSubmit}/>
                    </div>
                </div>
            );
        }
    }
    returnMemebers =(totalMembers, formValues)=>{
        switch(totalMembers){
            case '1': return formValues.person1;
            case '2': return formValues.person1+", "+formValues.person2;
            case '3': return formValues.person1+", "+formValues.person2+", "+formValues.person3;
            case '4': return formValues.person1+", "+formValues.person2+", "+formValues.person3+", "+formValues.person4;
                    
            case '5': return formValues.person1+", "+formValues.person2+", "+formValues.person3+", "+formValues.person4
                    +", "+formValues.person5;
                    
            case '6': return formValues.person1+", "+formValues.person2+", "+formValues.person3+", "+formValues.person4
                    +", "+formValues.person5+", "+formValues.person6;
            case '7': return formValues.person1+", "+formValues.person2+", "+formValues.person3+", "+formValues.person4
                    +", "+formValues.person5+", "+formValues.person6+", "+formValues.person7;
                    
            default: return null;
        }
    }
    // sumbit form data to backend
    onSubmit = async (formValues) =>{
        let filteredFormData ={};
        const id = uuidv4()+Date.now();
        let companions ="";
        const {
            firstName, 
            lastName, 
            service, 
            stateList, 
            address, 
            hasMemberValue,
            totalMembers, 
            appointmentDate, 
            mobile, 
            email,
            iConfirmData
        } = formValues;
        const dd = appointmentDate.getDate();
        const mm = appointmentDate.getMonth()+1;
        const yy = appointmentDate.getFullYear();
        const newDate = dd+"/"+mm+"/"+yy;
        //const newDate = appointmentDate.getDate()+"/"+englishMonthNames[appointmentDate.getMonth()]+"/"+appointmentDate.getFullYear();
        
        if(hasMemberValue ==="yes")
        companions = this.returnMemebers(totalMembers,formValues);

        if(companions){
            filteredFormData ={
                firstName,
                lastName,
                totalMembers: Number(totalMembers) +1,
                companions,
                service,
                newDate,
                weekDay: returnFormatteWeek(englishWeekNames, appointmentDate),
                address: address.name,
                stateList,
                mobile,
                email,
                iConfirmData,
                id
            }
        }
        else{
            filteredFormData ={
                firstName,
                lastName,
                totalMembers: 1,
                companions: 'none',
                service,
                newDate,
                weekDay: returnFormatteWeek(englishWeekNames, appointmentDate),
                address: address.name,
                stateList,
                mobile,
                email,
                iConfirmData,
                id
            }
        }

        try{
                await axios({
                method: 'post',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                //url: 'https://wwww.afghanconsulate-munich.com/terminserver/sendemail.php',
                url: config.apiEndPoint+'/insertdata.php',
                data: filteredFormData
            });
            
            this.setState({...filteredFormData});
            this.props.dispatch(reset('wizard'));
            
        }catch(ex){
            console.log("Error"+ex);
            toast("something went wrong, please click CONFIRM again!");
        }
        finally{
            console.log("any error");
        }

    }


}
const mapStateToProps =(state) =>{
    
    return{
        dispatch: state
    }
}

export default connect(mapStateToProps)(BookAppointment);