import React,{useState} from 'react'
import { Button, Modal, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FaEdit } from 'react-icons/fa';
import {edited} from '../../JS/Actions/ActionTasks'
const EditTask = ({Item}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [Myinput, setMyinput] = useState(Item.description);
    const handleChange = (e) => setMyinput(e.target.value);
    
    const dispatch = useDispatch();
    const edit = (e) => {
      dispatch(edited({id: Item.id, description: Myinput}));
      
    };
    return (
        <>
     
      <Button variant="outline-warning" onClick={handleShow}><FaEdit size={30}/> </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="p-3 mb-2 bg-secondary text-white" closeButton >
          <Modal.Title>Edit item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={Myinput}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer className="p-3 mb-6  bg-secondary text-white ">
          <Button variant="light" onClick={() => {
              handleClose();
              setMyinput(Item.description);
            }}
          >
            Close
          </Button>
          <Button
            variant="light"
            onClick={() => {
              handleClose();
              edit();
            }}
          >
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default EditTask
