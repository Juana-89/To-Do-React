import ListGroup from 'react-bootstrap/ListGroup';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FaPaperclip, FaTrash } from "react-icons/fa";
import './TodoItem.css';

function TodoItem(props) {
  return (
    <ListGroup as="ul">TodoItem
    <ListGroup.Item as="li" className="flex" style={{maxWidth:'97%'}}>
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
         <FaPaperclip />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Delete task</Tooltip>}>
        <span className="d-inline-block">
        <FaTrash />
        </span>
        </OverlayTrigger>
      </span>
    </ListGroup.Item>
    </ListGroup>
  );
}

export { TodoItem };