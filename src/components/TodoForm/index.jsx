import { useState, useContext } from "react";
import { TodoContext } from "../TodoContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { FaRegSave, FaRegTimesCircle } from "react-icons/fa";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <Form
      onSubmit={onSubmit}
      style={{ width: "100%", borderRadius: '8px',maxWidth: "350px", padding: "33px 40px" }}
      className="flex mb-2 bg-white flex-direction-column   justify-content-center   align-items-center;"
    >
      <Form.Group className="mb-3">
        <Form.Label className="text-black">
          <h5>Write your new TODO</h5>
        </Form.Label>
        <InputGroup>
          <Form.Control
            as="textarea"
            rows={4} 
            aria-label="With textarea"
            value={newTodoValue}
            onChange={onChange}
            placeholder="I'm going to visit my granpa this sunday"
          />
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3">
          <Button className="m-2" variant="primary" type="submit" size="lg">
            <FaRegSave/>{" "}Add
          </Button>
          <Button className="m-2" variant="light" type="button" onClick={onCancel} size="lg">
          <FaRegTimesCircle/>{" "}Cancel
          </Button>
      </Form.Group>
    </Form>
  );
}

export { TodoForm };
