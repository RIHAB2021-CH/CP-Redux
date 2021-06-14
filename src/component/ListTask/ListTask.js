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

    const handelFilter = () => setfilter(!filter);
    const ListTask = useSelector((state) => state);
    console.log (ListTask)
    return (
        <Container style={{padding:"0 0"}}>
            <Filter handelFilter={handelFilter} filter={filter} />
        <AddTask/>
       <ListGroup className="listprop" >
             {(filter?ListTask.filter(el=>el.isDone):ListTask).map((task,index) => {
        return (<Task Item={task} key={index}/>)
               })}
        </ListGroup>
        </Container>
    )
}
export default ListTask
