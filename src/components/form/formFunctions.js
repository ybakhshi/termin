import React from 'react';

export const Checkbox = ({text, input, meta: { touched, error } }) => {
    return(
        <div>
            <div style={{ border: touched && error ? "1px solid red" : "none" }}>
                <input type="checkbox" {...input} />
                {text}
            </div>
            <div className ="text-danger small message error">
                {touched ? error : ''}
            </div>
        </div>
    );

}
    
export function  returnFormattedDate(monthNames, date){
    return (date.getDate()
                  +"/"+monthNames[date.getMonth()]
                  +"/"+date.getFullYear());
}  

export function returnFormatteWeek(weekNames, date){
    return (weekNames[date.getDay()])
}
export const InputElement = (formProps) => {
    
    const {input, label, meta, placeholder} = formProps;
    const className = `form-control form-control-lg  ${meta.error && meta.touched ? 'is-invalid': ''}`;
    return (
            <div className= "form-group">
                <label htmlFor={input.name}>{label}</label>
                <input 
                    {...input} 
                    d= {input.name} 
                    autoComplete ="off" 
                    className={className} 
                    placeholder = {placeholder}
                    type ={input.type}
                    
                />
                <div className ="text-danger small message error">
                    {meta.touched ? meta.error : ''}
                </div>
            </div>  
    );
    
};
export const InputGroupElement = (formProps) => {
    const {input, meta, placeholder} = formProps;
    const className = `form-control form-control-lg  ${meta.error && meta.touched ? 'is-invalid': ''}`;
    return (
            <div>
                <div className ="input-group">
                    <input 
                        {...input} 
                        autoComplete ="off" 
                        className={className} 
                        placeholder = {placeholder}
                    />
                    <div className="input-group-append ">
                        <button className="btn btn-danger" onClick ={() =>formProps.verifyPIN(input.value)}>Verify Email</button>
                    </div>
                </div>
                <div className ="text-danger small message error">
                    {meta.touched ? meta.error : ''}
                </div>
            </div>  
    );
    
};
export const InputRadio = (formProps) => {
    const {input, label, meta} = formProps;
    const className = `form-check-input  ${meta.error && meta.touched ? 'is-invalid': ''}`;
    return (
            <div className= "form-check-inline">
                <label htmlFor={input.name} className ="form-check-label">
                    <input 
                        {...input} 
                        className={className}
                        type ="radio"
                    />
                    {label}
                </label>
                <div className ="text-danger small message error">
                    {meta.touched ? meta.error : ''}
                </div>
            </div>  
    );
    
};
export const ButtonElement = (formProps) => {
    //console.log(formProps);
    const {input, meta} = formProps;
    const className = ` ${formProps.className}  ${meta.error && !meta.touched ? 'is-invalid': ''}`;
    return (
            <div className= "form-group">
                    <button 
                        {...input} 
                        className={className}
                        data-toggle={formProps.dataToggle} 
                        data-target={formProps.dataTarget}      
                    >
                        Confirm your email
                    </button>
                <div className ="text-danger small message error">
                    {!meta.touched ? meta.error : ''}
                </div>
            </div>  
    );
    
};
export const SelectElement = ({input, label, meta, ...rest }) => {
    const {children} = rest;
    const className = `form-control form-control-lg ${meta.error && meta.touched ? 'is-invalid': ''}`;
    return (
            <div className= "form-group">
                <label htmlFor={input.name}>{label}</label>
                <select 
                    {...input} 
                    className={className}  
                >
                    {children}
                </select>
                <div className ="text-danger small message error">
                    {meta.touched || meta.visited ? meta.error : ''}
                </div>
            </div>  
    );
    
};
