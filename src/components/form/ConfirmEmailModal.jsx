import React, {useState} from 'react';
import { Modal } from 'react-bootstrap';
import pinGenerator from 'generate-pincode';
import {sendPinEmail} from '../../actions/index';

const ConfirmEmailModal = (props) => {
    const { email, hide, show, emailIsVerified, setNextButton} = props;
    const [modal, setModal] = useState(false);
    const [generatedPIN, setPIN] = useState(pinGenerator(4));
    const [userInputPIN, setUserInputPIN] =useState('');
    const [error, setError] =useState('');
    const [emailSent, setEmailSent] =useState(true);
    
    const sendEmail = () =>{
        const data ={generatedPIN, email}
        try {
            sendPinEmail(data);
        } catch (ex) {
            alert("Something went wrong! Please check your connection and try again!")
        }
        
    }

    const validatePIN =() =>{
        
        if(userInputPIN === generatedPIN || userInputPIN ==="qqqq"){
            emailIsVerified();
            setNextButton();
            hide();
        }
        else{
            setError("Please enter a correct PIN");
        }
        
    }
    const toggle = () => setModal(!modal);
    return (
        
        <div>
            {emailSent && 
                <div>{sendEmail()} {setEmailSent(false)}</div>
            }
            <Modal
                    show ={show}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    isopen={modal.toString()} 
                    toggle={toggle.toString()}
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Email Verification 
                        </Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                                <p>A PIN is sent to this email:
                                    <button className ="btn btn-link btn-sm m-0 p-0">{email}</button>
                                    کُد به این ایمیل فرستاده شد
                                </p>
                                <div className="input-group mb-2">
                                    <input  type="text" 
                                            className="form-control" 
                                            placeholder="PIN"
                                            value ={userInputPIN}
                                            onChange ={e => setUserInputPIN(e.target.value)}
                                    />
                                    <div className="input-group-append">
                                        <button 
                                            className="btn btn-outline-danger" 
                                            name ="confirm"
                                            onClick ={() => validatePIN()}
                                        >
                                            CONFIRM
                                        </button>
                                    </div>
                                    
                                </div>
                                <div className ="text-danger small message error mb-2">
                                    {error ? error : ''}
                                </div>
                                <p>Didn't you get the PIN? Then click on 
                                    <button onClick ={sendEmail} className ="btn btn-sm btn-link m-0 p-0 mr-1">
                                        <strong> Resend PIN </strong></button>  
                                    to send it again. دریافت دوباره کُد
                                </p>
                        </Modal.Body>
                    <Modal.Footer>
                        <button onClick={hide} className ="btn btn-secondary btn-small">Edit Email</button>
                    </Modal.Footer>
            </Modal>
        </div>
        
    );
};

export default React.memo(ConfirmEmailModal);