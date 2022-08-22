import React from "react";
import '../stylesheets/TodoList.css';

function TodoList(props) {
    return (
      <section>
      <ul>
      {props.children}
      </ul>
      </section>
    );
}

export { TodoList };