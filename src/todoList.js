const TodoListItem = ({ name, todoDispatch, id }) => {
  return (
    <div className="list">
      <span>{name}</span>
      <button
        onClick={() => todoDispatch({ type: "remove-todo", payload: { id } })}
      >
        삭제
      </button>
    </div>
  );
};
export default TodoListItem;
