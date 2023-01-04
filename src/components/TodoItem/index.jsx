import ListGroup from 'react-bootstrap/ListGroup';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FaPaperclip, FaTrash } from "react-icons/fa";
// import './TodoItem.css';

function TodoItem(props) {
  return (
    <ListGroup as="ul">
    <ListGroup.Item as="li" className="flex" style={{maxWidth:'97%'}}>
      <span
        className={`flex link-dark font-weight-bold ${props.completed && 'Icon-check--active'}` }
        onClick={props.onComplete}
        style={{fontSize:'24px'}}
      >
         <FaPaperclip />
      </span>
      <p className={`TodoItem-p ${props.completed && 'text-decoration-line-through'}`}>
        {props.text} 
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Delete task</Tooltip>}>
        <span className="position-absolute d-inline-block link-danger" style={{cursor:'pointer', top: '35px', right: '20px'}}>
        <FaTrash style={{fontSize:'24px'}}/>
        </span>
        </OverlayTrigger>
      </span>
    </ListGroup.Item>
    </ListGroup>
  );
}

export { TodoItem };