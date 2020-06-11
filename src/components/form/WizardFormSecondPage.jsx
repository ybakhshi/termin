import React, {useState} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm, formValueSelector, SubmissionError} from 'redux-form';
import {validate} from '../validation/validate';
import {hasActiveAppointment} from '../../actions/index';
import { InputElement, SelectElement } from './formFunctions';
import data from '../../data.json';
import DatePicker from './DatePicker';
import ConfirmEmailModal from './ConfirmEmailModal';

//globale varibles
var forNext =false;

let WizardFormSecondPage = (props) => {
  const [modalShow, setModalShow] = useState(true);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verifyError, setError] =useState('');
  const { 
      handleSubmit,
      previousPage,
      pristine,
      submitting,
      service,
      totalMembers,
      email,
      repeatEmail,
      emailStatus,
      setProgress,
      appointmentDate,
      error
      } = props;
  // to make sure email is verified only one time, if not changed
  const [test, setTest] =useState(emailStatus.name);
  const serviceKeys = Object.keys(data);
  
  const setNextButton =(status)=>{
    forNext =status;
  }
  const handleChange =() =>{
    setModalShow(true);
    setIsEmailVerified(false);
    setNextButton(false);
    setTest(null);
    setError("");
    setProgress(90);
  }
  const renderModal =() =>{
    return(
      <ConfirmEmailModal
              show={modalShow}
              hide ={() => setModalShow(false)}
              Field ={Field}
              email ={email}
              emailIsVerified ={() => setIsEmailVerified(true)}
              setNextButton ={() => setNextButton(true)}
            />
    );
  }
  //make sure, email is verified by sending pin via email
  const checkSubmit = (e) =>{
    if(!forNext){
        e.preventDefault();
        setError("Please verify your email. ایمیل تانرا باید تایید کنید");
    }
  }
  
  const submit = async (values)=>{
    const {service, email, appointmentDate} = values;
    const dd = appointmentDate.getDate();
    const mm = appointmentDate.getMonth()+1;
    const yy = appointmentDate.getFullYear();
    const newDate = dd+"/"+mm+"/"+yy;
      try{
          var response = await hasActiveAppointment(service,email,newDate);
      }
      catch(ex){
        alert("Something went wrong with us. pleas try again later!");
        return;
      }
      if(response.data==="fullyBooked")
      throw new SubmissionError({
        appointmentDate:"Ausgebucht! | ملاقات بیشتر برای تاریخ انتخاب شده ممکن نیست",
        _error: "لطفا یک تاریخ جدید انتخاب کنید"
      });
      else if(response.data==="moreThan3Appointments")
      throw new SubmissionError({
        appointmentDate:"You have 3 active appointments! بیشتر از سه وقت ملاقات اجازه ندارید",
        _error: "شما قبلا وقت ملاقات اخذ نموده اید"
      });
      else if(response.data==="hasOneAppointment")
      throw new SubmissionError({
        service:"You have already an appointment! شما برای این موضوع یک وقت ملاقات دارید ",
        _error: "شما قبلا وقت ملاقات اخذ نموده اید"
      });
      else
      props.nextPage();
}
  
  return (
    <div>
      
      <form onSubmit={handleSubmit(submit)} className ="mb-3">
        <div>
          <Field
              name ="mobile"
              component ={InputElement}
              type ="number"
              label = "Mobile | موبایل"
              onChange ={()=>setProgress(65)}
              placeholder ="01525*****92"
          />
          <Field 
              name= "service" 
              component ={SelectElement}
              label = "Services | خدمات "
              onChange ={()=>setProgress(40)}
          >
            <option value="" disabled defaultValue hidden>Select a Service</option>
            {serviceKeys.map((key) =>(
                <option 
                    key={key} 
                    value ={key}> 
                    {data[key]}
                </option>
            ))}   
          </Field>
  
          {service &&
            <Field 
                  name="appointmentDate" 
                  type ="date"
                  component ={DatePicker}
                  label = "Date | تاریخ ملاقات"
                  service ={service}
                  totalMembers = {totalMembers}
                  onChange ={()=>setProgress(55)}
            />
          } 
          
          {appointmentDate &&
            <div>
              <div className="row">
                  <div className="col-sm-6">
                  <Field 
                      name = "email"
                      component ={InputElement} 
                      label = "Email | ایمیل"
                      type ="email"
                      placeholder = "yonus.bakhshi@gmail.com"
                      onChange ={() => handleChange()}
                      
                  />
                  </div>
                  <div className="col-sm-6">
                  <Field 
                      name = "repeatEmail"
                      component ={InputElement} 
                      label = "Repeat Email | تکرار ایمیل"
                      type = "email"
                      placeholder = "yonus.bakhshi@gmail.com"
                      onChange ={() => handleChange()}
                      
                  />
                  </div>  
              </div>
            </div>
          }
  
          <div className ="text-danger  message error mb-2">
              <p className="text-center text-sm-center ">{verifyError ? verifyError : ''}</p>
          </div>
          {(email === repeatEmail) && (!test) && renderModal()}
  
          {(isEmailVerified || test) &&
            <div>
              
              <div className="alert alert-success">
                <strong>Thank You!</strong> Your email is verified.
                <Field 
                    name ="verified" 
                    component ="input" 
                    type ="checkbox" 
                    checked disabled
                    className ="ml-3"
                  />
              </div>
            </div>
          }
          
          <div className ="row">
              <div className ="col">
                <button 
                    type="button" 
                    className="btn btn-secondary btn-block "
                    onClick={previousPage}
                >
                  Back
                </button>
              </div>
              <div className ="col">
                <button 
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={pristine||submitting }
                    onClick={(e)=>checkSubmit(e)}
                >
                  Next
                </button>
              </div>
            
          </div>
          <div className ="text-danger text-center small error message">{error && <strong>{error}</strong>}</div>
        </div>
      </form>
      <h4 className="text-center">2 | 3</h4>
    </div>
  )
}

WizardFormSecondPage = reduxForm({
  validate: validate,
  //asyncValidate,
  form: 'wizard',              
  destroyOnUnmount: false,
  //asyncChangeFields: ['service', 'email']
})(WizardFormSecondPage);

const selector = formValueSelector('wizard'); 

const mapStateToProps =(state) =>{
  //console.log(state.form.wizard.registeredFields);
  const {
    service, 
    email, 
    repeatEmail, 
    totalMembers,
    receivedPIN,
    appointmentDate,
  } = selector(state, 'service','email','repeatEmail', 'totalMembers', 'receivedPIN', 'appointmentDate');
  
  return {
    appointmentDate,
    service,
    receivedPIN,
    totalMembers,
    email: `${email || '$'}`,
    repeatEmail: `${repeatEmail || '#'}`,
    emailStatus: state.form.wizard.registeredFields.verified? state.form.wizard.registeredFields.verified: '',
  }
  
}

export default connect(mapStateToProps)(WizardFormSecondPage);
