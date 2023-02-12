import "./CreateTodoButton.css";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <OverlayTrigger
      overlay={<Tooltip id="tooltip-disabled">Add new task</Tooltip>}
    >
      <button
        className="CreateTodoButton bg-info d-flex justify-content-center align-items-center position-fixed cursor-pointer border-info mb-3 fw-bold display-4 text-light rounded-circle translate-middle bottom-0 end-0"
        style={{ boxShadow: "0px 5px 25px rgba(97, 218, 250, 0.5)" }}
        onClick={onClickButton}
      >
        +
      </button>
    </OverlayTrigger>
  );
}

export { CreateTodoButton };
