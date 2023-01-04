import ListGroup from 'react-bootstrap/ListGroup';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import './TodoItem.css';
import { FaPaperclip, FaTrash } from "react-icons/fa";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


function TodoItem(props) {
  return (
    <ListGroup as="ul">
    <ListGroup.Item as="li" className="TodoItem">
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