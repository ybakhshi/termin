// import config from '../../config.json';
// import axios from 'axios';
export const validate = (formValues) =>{
    const errors ={};
    //below addressArray is required for validating address field  
    const addressArray= formValues.address? Object.values(formValues.address) : [];
    
    
    if(!formValues.firstName || formValues.firstName.trim() === ""){
        errors.firstName = "You must enter a first Name!";
    }
    if(!formValues.lastName || formValues.lastName.trim() === ""){
        errors.lastName = "You must enter a last Name!";
    }
    if(!formValues.stateList || formValues.stateList === ""){
        errors.stateList = "You must select this option!";
    }
    if(!formValues.memberNames || formValues.memberNames.trim() === ""){
        errors.memberNames = "You must family member names";
    }
    if(!formValues.email || formValues.email.trim() === ""){
        errors.email = "You must enter an email!";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
        errors.email = 'Invalid email address'
    }
    //Email validation
    if(!formValues.repeatEmail || formValues.repeatEmail.trim() === ""){
        errors.repeatEmail = "You must retype your email!";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.repeatEmail)) {
        errors.repeatEmail = 'Invalid email address'
    }

    if(formValues.email !== formValues.repeatEmail){ 
        errors.repeatEmail = "Emails do not match!";
    }
    
    if(formValues.hasMemberValue ==="no"){
        formValues.totalMembers = '';
    }
    if(!formValues.hasMemberValue || formValues.hasMemberValue === ""){
        errors.hasMemberValue = "You must select Yes or No!";
    }
    if(!formValues.totalMembers || formValues.totalMembers === ""){
        errors.totalMembers = "You must select this option!";
    }
    if(!formValues.service || formValues.service === ""){
        errors.service = "You must select this option!";
    }
    if(!formValues.appointmentDate || formValues.appointmentDate === ""){
        errors.appointmentDate = "You must select this option!";
    }
    // to hide the How many field and relevant below fields

    if(formValues.hasMemberValue && formValues.totalMembers === ""){
        errors.totalMembers = "You must select this option!";
    }
    if(!formValues.person1 || formValues.person1.trim() ===""){
        errors.person1 = "This is a required field";
    }
    if(!formValues.person2 || formValues.person2.trim() ===""){
        errors.person2 = "This is a required field";
    }
    if(!formValues.person3 || formValues.person3.trim() ===""){
        errors.person3 = "This is a required field";
    }
    if(!formValues.person4 || formValues.person4.trim() ===""){
        errors.person4 = "This is a required field";
    }
    if(!formValues.person5 || formValues.person5.trim() ===""){
        errors.person5 = "This is a required field";
    }
    if(!formValues.person6 || formValues.person6.trim() ===""){
        errors.person6 = "This is a required field";
    }
    if(!formValues.person7 || formValues.person7.trim() ===""){
        errors.person7 = "This is a required field";
    }
    if(!formValues.iConfirmData){
        errors.iConfirmData = "This is a required field";
    }
    if(!formValues.mobile || formValues.mobile.trim() ===""){
        errors.mobile = "This is a required field";
    }
    if(!Number.isInteger(Number(formValues.mobile))){
        errors.mobile = "Only numbers is allowed!";
    }
    if(!/^\d{8,14}$/i.test(formValues.mobile)){
        errors.mobile = "Please enter a valid mobile number";
    }
    if(!formValues.receivedPIN || formValues.receivedPIN.trim() ===""){
        errors.receivedPIN = "This is a required field";
    }
    
    if(formValues.address === null || formValues.address=== undefined){
        errors.address = "Address is a required field";
    }
    if(!addressArray[0] || addressArray[0].trim() ===""){
        errors.address = "please enter a valid address";
    }
    
    if(addressArray[1] ==="country"){
        errors.address = "Required! Enter a valid address!";
    }
    if(addressArray[2] && addressArray[2] !== formValues.stateList){
        errors.address = "Please provide a proper address[Street No, postalcolde, city ] within selected state!";
        errors.stateList = "State and below addres do not match!";
    }
    return errors;
}

