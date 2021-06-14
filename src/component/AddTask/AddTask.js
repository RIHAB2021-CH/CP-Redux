import React,{useState} from 'react'
import './AddTask.css'
import {Button,Modal,InputGroup} from 'react-bootstrap'
import { useDispatch } from "react-redux"
import {addnew} from "../../JS/Actions/ActionTasks"
const AddTask = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [description, setDescription] = useState("");
    // console.log(description)
    const handleChange=e=>{e.preventDefault();setDescription(e.target.value);};
    const dispatch = useDispatch();
    const addNewTask = (e) => {
      e.preventDefault()
      if(description){
        console.log(description)
          dispatch(addnew({
              id:Math.random(),
              description: description,
              isDone:false,

          },));
         
          setDescription("");
      } 
    
else{alert("Please give a description for the task");}
  };
    return (
        <div>
      <button    className='formbutton' onClick={handleShow}>Add New</button>
           <Modal onSubmit={addNewTask} show={show} onHide={handleClose} className="Modal fade bd-example-modal-lg">
      <Modal.Header className="p-3 mb-2 bg-secondary text-white" closeButton >
          <Modal.Title >Add a New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body >
      
            <InputGroup style={{marginTop: '1rem'}} size="xl">
            <InputGroup.Prepend >
            <InputGroup.Text  id="inputGroup-sizing-sm">Task-Description</InputGroup.Text>
            </InputGroup.Prepend>
            <textarea className="form-control" aria-label="With textarea" value={description} onChange={handleChange}></textarea></InputGroup>
          
               
        </Modal.Body>
        <Modal.Footer className="p-3 mb-6  bg-secondary text-white " >
          <Button variant="light" className='FormButton1 'onClick={handleClose}>
            Close
          </Button>
          <Button variant="light" className='FormButton2' onClick={addNewTask}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddTask