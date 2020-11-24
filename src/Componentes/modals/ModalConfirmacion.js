import React from 'react';
import { useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { BsCheckCircle } from "react-icons/bs";
const Approval = (props) =>{
    const [modal, setModal] = useState(false);
    const { itemId } = props;
    const toggle = () => setModal(!modal);
  
    return(
        <>
        <div className='col-sm-2'>
            <button className='btn btn-light btn-sm  mr-2' onClick={toggle}>
                <span><BsCheckCircle/></span>{' '}
                Approve</button>

                <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader toggle={toggle}>Request for confirmation</ModalHeader>
                    <ModalBody>
                    <p>Estas seguro de cerrar la sesion?</p>
                    </ModalBody>
                    <ModalFooter>
                    <button type='button' className="btn btn-light btn-sm  mr-2" >Yes, I confirm</button> {' '}
                    <button className='btn btn-light btn-sm  btn-sm ' onClick={toggle}>Back</button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}
export default Approval