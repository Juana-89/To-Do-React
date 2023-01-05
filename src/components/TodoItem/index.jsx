import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FaRegCircle, FaCheckCircle, FaTrash } from "react-icons/fa";
// import './TodoItem.css';

function TodoItem(props) {
  const [disabled, setDisabled ] =useState(true)
  const opDisable = () => {
    setDisabled(false)

  }
  return (
    <ListGroup as="ul">
    <ListGroup.Item as="li" className="flex" style={{maxWidth:'97%'}}>
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Check if this task was completed </Tooltip>}>
      <span
        className={`flex link-dark font-weight-bold position-absolute ${props.completed}` }
        onClick={props.onComplete }
        style={{fontSize:'24px', marginLeft: '12px', cursor:'pointer'}}
      >
         <Form.Check aria-label="option 1" onClick= {opDisable} id="op"/>
      </span>
      </OverlayTrigger>
      <p className={`TodoItem-p ${props.completed && 'text-decoration-line-through'}`}
      style={{fontSize:'18px', lineHeight: '4px', marginLeft: "50px", marginTop: "20px"}}>
        {props.text} 
      </p>
      <span
        onClick={props.onDelete}
      >
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Delete task</Tooltip>}>
        <span className="position-absolute d-inline-block link-danger" style={{cursor:'pointer', top: '15px', right: '20px'}}>
        <FaTrash style={{fontSize:'24px'}}/>
        </span>
        </OverlayTrigger>
      </span>
    </ListGroup.Item>
    </ListGroup>
  );
}

export { TodoItem };