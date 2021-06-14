import React from 'react'
import './Task.css'
import {Card,Button,ButtonGroup,ListGroup } from 'react-bootstrap';
import { useDispatch } from "react-redux"
import {deleted,completed} from '../../JS/Actions/ActionTasks'
import EditTask from '../EditTask/EditTask'
const Task = ({Item}) => {
  const dispatch = useDispatch();
  // console.log(Item)
    return (
        
<Card style={{ width: '70rem',padding:'1rem 2rem 1rem 2rem',marginLeft:'1%'}}>
       
  <ListGroup  horizontal className="my-2" >

    <ListGroup.Item variant='light' style={{fontSize:'1.5rem'}}>{(Item.isDone)? "✳" :"✴"}</ListGroup.Item>
    <ListGroup.Item action variant='outline-light' className={Item.isDone ? "Notchecked" :"checked" }> <p>{Item.description}</p></ListGroup.Item>
      <ListGroup.Item  variant='light'>
        
     <ButtonGroup aria-label="Basic example">
        <Button style={{fontSize:'2rem'}} variant={Item.isDone ?  "outline-success":"outline-danger" } onClick={() => dispatch(completed(Item.id))}>{Item.isDone ? "☒" :"☐" }</Button>
        <EditTask Item={Item} />
        <Button variant="outline-secondary" onClick={() => dispatch(deleted(Item.id))}>✖</Button>
     </ButtonGroup></ListGroup.Item>

  </ListGroup>

</Card>
      
     
      
      
     

    )
}

export default Task