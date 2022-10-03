import { TODOACTION_TYPES } from "./reducer/todoReducer";

const TodoListItem = ({ name, todoDispatch, id, isHere }) => {
  return (
    <div className="list">
      <span
        style={{
          backgroundColor: isHere ? "#000" : "#fff",
          color: isHere ? "#fff" : "#000",
        }}
        onClick={() =>
          todoDispatch({ type: TODOACTION_TYPES.solvelist, payload: { id } })
        }
      >
        {name}
      </span>
      <button
        className="btn"
        onClick={() =>
          todoDispatch({ type: TODOACTION_TYPES.removelist, payload: { id } })
        }
      >
        삭제
      </button>
    </div>
  );
};
export default TodoListItem;
