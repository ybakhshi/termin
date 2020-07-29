import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import {validate} from '../validation/validate';
import {InputElement, SelectElement, InputRadio} from './formFunctions';
import { numOfPersons } from './formData';
//import LocationSearchInput from './LocationSearchInput';
//import DatePicker from './DatePicker';


let WizardFormFirstPage = (props) => {
  //const [address, setAddress] = useState("");
  const {
    totalMembers,
    handleSubmit,
    hasMemberValue,
    pristine,
    submitting,
    setProgress,
    stateList,
    
} = props;



const rederSingleInput =(i) =>{
  return(<div className="form-group">
          <Field
              name={`person${i}`}
              component ={InputElement}
              type ="text"
              label = {`Person${i} Name | نام کامل`}
              placeholder = {`person ${i} ..`}
          />
      </div>);
}


  return (

    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Field 
                name= "stateList" 
                component ={SelectElement}
                label = " State | ایالت "
                onChange ={()=>setProgress(10)}
            >
              <option value="" disabled defaultValue hidden>Select a list</option>
              <option  value ="Bayern">Bayern</option>
              <option  value ="Baden-Württemberg">Baden-Württemberg</option>
                  
          </Field>
  
          {stateList && 
            <Field 
                name ="address"
                component ={InputElement}
                label ="Address | آدرس"
                type ="text"
                placeholder = "Full Address"
            />
          // <Field 
          //     name ="address"
          //     component ={LocationSearchInput}
          //     label ="Address | آدرس"
          // />
          }
          
          <div className="row">
                  <div className="col-sm-6">
                  <Field 
                      name = "firstName"
                      component ={InputElement} 
                      label = "First Name | نام"
                      type ="text"
                      placeholder = "Yonus"
                      onChange ={()=>setProgress(15)}
                  />
                  </div>
                  <div className="col-sm-6">
                  <Field 
                      name = "lastName"
                      component ={InputElement} 
                      label = "Last Name | نام فامیلی"
                      type = "text"
                      placeholder = "Bakhshi"
                      onChange ={()=>setProgress(20)}
                  />
                  </div>
              </div>
              <div className="row form-group">
                  <div className="col-sm-6">
                      <label htmlFor="hasMember">Companion? | اعضای فامیل؟ </label>
                  </div>
                  <div className="col-sm-6 form-group">
                          <Field 
                            name="hasMemberValue" 
                            component={InputRadio}
                            type="radio" 
                            value="yes"
                            label ="Yes"
                            onChange ={()=>setProgress(25)}
                          /> 
                          <Field 
                            name="hasMemberValue" 
                            component={InputRadio} 
                            type="radio" 
                            value="no"
                            label ="No"
                            onChange ={()=>setProgress(25)}
                          />
                  </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                {hasMemberValue ==="yes" && (
                    <Field 
                        name="totalMembers"  
                        component={SelectElement}
                        className = "form-control"
                        label ="How many? | تعداد "
                        onChange ={()=>setProgress(30)}
                    >
                        <option value="" disabled defaultValue hidden> Select | انتخاب کن  </option>
                        {numOfPersons.map((person, key) =>(
                            <option 
                            key={key} 
                            value ={person.value}> 
                            {person.label}
                            </option>
                        ))}
                    </Field>
                )}
                </div>
                <div className="col-md-6">
                  {(Number(totalMembers)===1) && rederSingleInput(1)}
                  {(Number(totalMembers)===3) && rederSingleInput(1)} 
                  {(Number(totalMembers)===4) && rederSingleInput(1)}
                  {(Number(totalMembers)===5) && rederSingleInput(1)}
                  {(Number(totalMembers)===7) && rederSingleInput(1)}
                  {(Number(totalMembers)===10) && rederSingleInput(1)}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  {(Number(totalMembers)===2) && rederSingleInput(1)}
                </div>
                <div className="col-md-6">
                  {(Number(totalMembers)===2) && rederSingleInput(2)}
                </div>
              </div>  
              <div className="row">
                <div className="col-md-6">
                  {(Number(totalMembers)===3) && rederSingleInput(2)}
                </div>
                <div className="col-md-6">
                  {(Number(totalMembers)===3) && rederSingleInput(3)}
                </div>
              </div>
                <div className="row">
                  <div className="col-md-4">
                  {(Number(totalMembers)===4) && rederSingleInput(2)} 
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===4) && rederSingleInput(3)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===4) && rederSingleInput(4)}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                  {(Number(totalMembers)===5) && rederSingleInput(2)}
                  </div>
                  <div className="col-md-6">
                  {(Number(totalMembers)===5) && rederSingleInput(3)}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                  {(Number(totalMembers)===5) && rederSingleInput(4)}
                  </div>
                  <div className="col-md-6">
                  {(Number(totalMembers)===5) && rederSingleInput(5)}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                  {(Number(totalMembers)===6) && rederSingleInput(1)}      
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===6) && rederSingleInput(2)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===6) && rederSingleInput(3)}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                  {(Number(totalMembers)===6) && rederSingleInput(4)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===6) && rederSingleInput(5)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===6) && rederSingleInput(6)} 
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-md-4">
                  {(Number(totalMembers)===7) && rederSingleInput(2)}      
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===7) && rederSingleInput(3)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===7) && rederSingleInput(4)}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                  {(Number(totalMembers)===7) && rederSingleInput(5)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===7) && rederSingleInput(6)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===7) && rederSingleInput(7)} 
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                  {(Number(totalMembers)===8) && rederSingleInput(1)}      
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===8) && rederSingleInput(2)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===8) && rederSingleInput(3)}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                  {(Number(totalMembers)===8) && rederSingleInput(4)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===8) && rederSingleInput(5)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===8) && rederSingleInput(6)} 
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                  {(Number(totalMembers)===8) && rederSingleInput(7)}
                  </div>
                  <div className="col-md-6">
                  {(Number(totalMembers)===8) && rederSingleInput(8)}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                  {(Number(totalMembers)===9) && rederSingleInput(1)}      
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===9) && rederSingleInput(2)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===9) && rederSingleInput(3)}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                  {(Number(totalMembers)===9) && rederSingleInput(4)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===9) && rederSingleInput(5)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===9) && rederSingleInput(6)} 
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                  {(Number(totalMembers)===9) && rederSingleInput(7)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===9) && rederSingleInput(8)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===9) && rederSingleInput(9)} 
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                  {(Number(totalMembers)===10) && rederSingleInput(2)}      
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===10) && rederSingleInput(3)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===10) && rederSingleInput(4)}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                  {(Number(totalMembers)===10) && rederSingleInput(5)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===10) && rederSingleInput(6)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===10) && rederSingleInput(7)} 
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                  {(Number(totalMembers)===10) && rederSingleInput(8)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===10) && rederSingleInput(9)}
                  </div>
                  <div className="col-md-4">
                  {(Number(totalMembers)===10) && rederSingleInput(10)} 
                  </div>
                </div>
        </div>
        <div className ="form-group">
          <button 
              type="submit" 
              className="btn btn-primary btn-block"
              disabled={pristine || submitting}
              
          >
            Next
          </button>
        </div>
      </form>
      <h4 className="text-center">1 | 3</h4>
    </div>
  ) 
}

WizardFormFirstPage = reduxForm({
  validate: validate,
  form: 'wizard',              
  destroyOnUnmount: false,
     // <------ preserve form data
  //forceUnregisterOnUnmount: true
})(WizardFormFirstPage);


const selector = formValueSelector('wizard') // <-- same as form name
WizardFormFirstPage = connect(state => {
  // can select values individually
  const hasMemberValue = selector(state, 'hasMemberValue')
  const subject = selector(state, 'subject')
  const totalMembers = selector(state, 'totalMembers');
  const stateList = selector(state, 'stateList');
  const address = selector(state, 'address');
 
  // or together as a group
  //const { firstName, lastName } = selector(state, 'firstName', 'lastName')
  return {
    hasMemberValue,
    subject,
    stateList,
    address,
    totalMembers: `${totalMembers || ''}`,
  }
})(WizardFormFirstPage);

export default WizardFormFirstPage;