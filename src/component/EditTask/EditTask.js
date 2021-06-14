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
    const edit = (e) => {e.preventDefault();
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
        <Modal.Header closeButton>
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
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
              handleClose();
              setMyinput(Item.description);
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              edit();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default EditTask
