import { useContext } from "react";
import { TodoContext } from "../TodoContext";
// import './TodoSearch.css';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearch } from "react-icons/fa";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <InputGroup className="mb-3 m-4" size="lg" style={{maxWidth:'96%'}}>
      <InputGroup.Text id="basic-addon1">
        <FaSearch />
      </InputGroup.Text>
      <Form.Control
        className="TodoSearch"
        placeholder="Search for a saved task"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </InputGroup>
  );
}

export { TodoSearch };
