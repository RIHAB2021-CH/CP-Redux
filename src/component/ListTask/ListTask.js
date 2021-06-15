import React,{useState} from 'react'
import Task from '../Task/Task'
import { useSelector } from "react-redux";
import './ListTask.css'
import {ListGroup } from 'react-bootstrap';
import AddTask from '../AddTask/AddTask'
import Filter from '../Filter/Filter';
import { Container } from "react-bootstrap";

const ListTask = () => {
    const [filter, setfilter] = useState(false);
    const [filterUndone, setfilterUndone] = useState(false);
    const handelFilter = () => setfilter(!filter);
    const handelFilter1 = () => setfilterUndone(!filterUndone);
    const ListTask = useSelector((state) => state);
    console.log (ListTask)
    return (
        <Container style={{padding:"0 0"}}>
            <Filter handelFilter={handelFilter} handelFilter1={handelFilter1} filterUndone={filterUndone} filter={filter}/>
        <AddTask/>
       <ListGroup className="listprop" >
             {(filter?(filterUndone?ListTask:(ListTask.filter(el=>el.isDone===true))):(filterUndone?ListTask.filter(el=>(el.isDone===false)):ListTask)).map((task,index) => {
        return (<Task Item={task} key={index}/>)
        
               })}
        </ListGroup>
        </Container>
    )
}
export default ListTask
