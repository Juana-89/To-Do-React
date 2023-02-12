function TodoList(props) {
  return (
    <section className="main">
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };