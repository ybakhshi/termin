import React from 'react';
import Modal from 'react-bootstrap/Modal'
const DeleteModale = (props) => {
    
    const { show, isDeleteConfirmed } = props;

    const handleClick =(e)=>{
        if(e.target.name ==="confirm"){
            isDeleteConfirmed("YES");
        }
        else{
            isDeleteConfirmed("");  
        }
        
    }
    return (
      <Modal
        show ={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" className ="text-center">
            DELETE CONFIRMATION
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Are you sure you want to delete your appointment!</p>
        </Modal.Body>
        <Modal.Footer>
          <div className ="row">
                <div className = "col">
                    <button onClick={(e) =>handleClick(e)} name = "cancel" className ="btn btn-secondary">CANCEL</button>
                </div>
                <div className ="col">
                    <button onClick={(e) =>handleClick(e)} name = "confirm" className ="btn btn-primary">CONFIRM</button>
                </div>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }
export default DeleteModale;