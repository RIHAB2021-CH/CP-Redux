import React from 'react'
import {Navbar,Button } from 'react-bootstrap';

const Filter = ({handelFilter, filter}) => {
    return (

  <Navbar expand="lg" variant="dark" bg="secondary" style={{ width: '70rem',padding:'1rem 5rem 1rem 5rem',marginLeft:'0%'}}>
    <Navbar.Brand href="#">My TODO-LIST</Navbar.Brand> 
    <Navbar.Collapse className="justify-content-end">
    <Button variant={filter?"light":"success"} style={{marginLef:'20% !important' }} onClick={handelFilter}>{filter?"All":"ISDONE"}</Button>
    </Navbar.Collapse>
  </Navbar>

        
    )
}

export default Filter
