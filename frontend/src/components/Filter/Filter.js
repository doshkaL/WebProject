import React from 'react';
import {Form} from 'react-bootstrap';

 function Fitoo(props){
  

return (
  

 
<div>
    <Form.Group controlId="fil">
    <Form.Label>Choose Hotel or Arzt
    </Form.Label>
    
    <Form.Select defaultValue="All" onChange={props.data} >
    <option value="All">All</option> 
     <option value="Arzt">Arzt</option>
      <option value="Hotel">Hotel</option>
      

    </Form.Select>
  </Form.Group>
  </div>
  );
 }


 

export default Fitoo;