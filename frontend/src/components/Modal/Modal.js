import React from 'react';

import { Button,Modal} from 'react-bootstrap';

import './Modal.css';

const modal = props => (
  <Modal.Dialog><Modal.Header >
  <Modal.Title className=''><h1 variant="primary" >{props.title}</h1></Modal.Title>
</Modal.Header>

<Modal.Body>
<h1>{props.children}</h1>
  </Modal.Body>
  <Modal.Footer>
  {props.canCancel && (
        <Button variant="primary"  onClick={props.onCancel}>
          Cancel
        </Button>
      )}
      {props.canConfirm && (
     <Button variant="primary"  onClick={props.onConfirm}>
     {props.confirmText}
   </Button>
      )}</Modal.Footer>
      
</Modal.Dialog>
  
);

export default modal;