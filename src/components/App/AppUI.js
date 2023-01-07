import { useContext, Fragment } from "react";
import { Header } from "../Header/index";
import { TodoContext } from "../TodoContext/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoList } from "../TodoList/index";
import { TodoItem } from "../TodoItem/index";
import { TodoForm } from "../TodoForm/index";
import { CreateTodoButton } from "../CreateTodoButton/index";
import { Modal } from "../Modal/index";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <Fragment>
      <Header />
      <h2 className="m-4">You can add tasks!</h2>
      <TodoSearch />

      <TodoList>
        {error && <p>There was a error...</p>}
        {loading && <p>Loading...</p>}
        {!loading && !searchedTodos.length && <p>Create your first TODO!</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </Fragment>
  );
}

export { AppUI };
