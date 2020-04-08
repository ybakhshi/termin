import React from 'react';
import {Field, reduxForm, getFormValues } from 'redux-form';
import {validate} from '../validation/validate';
import { Checkbox, returnFormatteWeek, returnFormattedDate } from './formFunctions';
import { englishMonthNames, englishWeekNames } from './formData';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


let WizardFormThirdPage = (props) => {
  
  const { handleSubmit, pristine, previousPage, submitting, formValues, setProgress } = props;
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
          email
        } = formValues;
  
  var familyMemberList ="";
  if(hasMemberValue ==="yes"){
    
    switch(totalMembers){
      case '1': familyMemberList = formValues.person1;break;
      case '2': familyMemberList = formValues.person1+", "+formValues.person2;break;
      case '3': familyMemberList = formValues.person1+", "+formValues.person2+", "+formValues.person3;break;
      case '4': familyMemberList = formValues.person1+", "+formValues.person2+", "+formValues.person3+", "+formValues.person4;
              break;
      case '5': familyMemberList = formValues.person1+", "+formValues.person2+", "+formValues.person3+", "+formValues.person4
              +", "+formValues.person5;
              break;
      case '6': familyMemberList = formValues.person1+", "+formValues.person2+", "+formValues.person3+", "+formValues.person4
              +", "+formValues.person5+", "+formValues.person6;break;
      case '7': familyMemberList = formValues.person1+", "+formValues.person2+", "+formValues.person3+", "+formValues.person4
              +", "+formValues.person5+", "+formValues.person6+", "+formValues.person7;
              break;
      default: break;
    }
  }


  const renderObject =(field, value)=>{
    return(
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor={field}>{field}</label>
          <input type="text" className="form-control form-control-sm" value={value} disabled/>
        </div>
      </div> 
    )
  }
  const renderOneRow =(field, value)=>{
    
    return(
        <div className ="col-md-12">
          <div className="form-group">
            <label htmlFor={field}>{field}</label>
            <input type="text" className="form-control form-control-sm" value={value} disabled/>
          </div>
        </div>
    )
  }
const checkMeOut =()=>{
  setProgress(95);
}
  return (
    <div>
      <h5 className="text-center"> SUMMARY </h5>
      <form onSubmit={handleSubmit} className ="mt-3 mb-3">
        <div>
          <div className="row">
            {renderObject("Full Name", firstName+" "+lastName)}
            {renderObject("Selected Service", service)}
          </div>
          <div className="row">
            {
              renderObject(
                "Appointment Date", returnFormatteWeek(englishWeekNames, appointmentDate) 
                +": "+returnFormattedDate(englishMonthNames,appointmentDate)
              )
            }
            {renderObject("State", stateList)}
          </div>
          <div className ="row">
              {renderOneRow("Address", address.name)}
          </div> 
          <div className ="row">
            {hasMemberValue==="yes" && renderOneRow("Family Members", familyMemberList)}
          </div>
          <div className="row">
            {renderObject("Mobile", mobile )}
            {renderObject("Email", email)}
          </div>
          <div className="alert alert-secondary">
              <Field 
                  name ="iConfirmData" 
                  component ={Checkbox}
                  text ={<span className ="ml-3">Yes, I confirm the data is correct and 
                  also agree to receive relevant announcements and emails from Afghanistan Consulate in Munich.</span>} 
                  onChange ={checkMeOut} 
                  id="confirm-data"              
              />
              <br/>
              {/* <Field 
                  name ="subscription" 
                  id="subscription"
                  component ={Checkbox}
                  text ={<span className ="ml-3">Yes, I would like to receive relevant announcements and emails from Afghanistan consulate.</span>}             
              /> */}
          </div>     
         <div className ="row">
            <div className ="col">
              <button 
                  type="button" 
                  className="btn btn-secondary btn-block "
                  onClick={previousPage}
              >
                EDIT
              </button>
            </div>      
            <div className ="col">
              <button 
                  type="submit" 
                  className="btn btn-primary btn-block "
                  disabled={pristine || submitting} 
              >
              {submitting ?
                <span>
                  <FontAwesomeIcon icon = "spinner" /> Processing...
                </span>
                :
                <span>CONFIRM</span>
              }
              </button>
            </div>
          
          </div>
        </div>
      </form>
      <h4 className="text-center">3 | 3</h4>
    </div>
  );
}

WizardFormThirdPage = reduxForm({
  validate: validate,
  form: 'wizard',              
  destroyOnUnmount: false
})(WizardFormThirdPage);

//const selector = formValueSelector('wizard'); 

const mapStateToProps =(state) =>{
  return {
    formValues: getFormValues("wizard")(state)
  }
}

export default  connect(mapStateToProps)(WizardFormThirdPage);

