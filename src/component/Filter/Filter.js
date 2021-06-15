import React from 'react'
import {Navbar,InputGroup,Badge } from 'react-bootstrap';
import './filter.css'

const Filter = ({handelFilter,handelFilter1}) => {
    return (

  <Navbar expand="lg" variant="dark" bg="secondary" style={{ width: '70rem',padding:'1rem 5rem 1rem 5rem',marginLeft:'0%'}}>
    <Navbar.Brand >My TODO-LIST</Navbar.Brand> 
    <Navbar.Collapse className="justify-content-end">
      
    <InputGroup.Checkbox aria-label="Checkbox for following text input" className='input' onChange={handelFilter} /><h4><Badge text="primary" bg="light">Done</Badge></h4>
    <InputGroup.Checkbox aria-label="Checkbox for following text input" className='input'onChange={handelFilter1} />
    <h4 ><Badge text="light" bg="light">Undone</Badge></h4>
 
   </Navbar.Collapse>
  </Navbar>

        
    )
}

export default Filter
