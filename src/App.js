import React, { useReducer, useState } from "react";
import { BANKACTION_TYPES, bankReducer } from "./reducer/simpleReducer";
import TodoListItem from "./todoList";
import "./App.css";

// reducer : state를 업데이트, 기록 해주는 역할 (은행)
// dispatch : state 업데이트를 위한 요구사항
// action : 요구의 내용
// [새로운state, dispatch] = useReducer(리듀서 , 초기값(함수로 만든 객체, 직관적인 값인 0 등..이 들어갈 수 있다.) )

const TODOACTION_TYPES = {
  addlist: "add-todo",
  removelist: "remove-todo",
  solvelist: "solve-todo",
};

const todoReducer = (state, action) => {
  console.log("todolist", state, action);

  switch (action.type) {
    case TODOACTION_TYPES.addlist:
      const listname = action.payload.listitem;
      const newList = {
        id: Date.now(),
        name: listname,
      };
      return {
        count: state.count + 1,
        lists: [...state.lists, newList],
      };

    case TODOACTION_TYPES.removelist:
      return {
        count: state.count - 1,
        // todoList컨퍼넌트에 인자로 id를 넘겨 주었기 때문에 id로 분별해낸다.
        // filter메소드를 이용해 list에 id가 payload의 id가 해당하지 않는 list들을 filtering 해 준다.
        lists: state.lists.filter((list) => list.id !== action.payload.id),
      };

    case TODOACTION_TYPES.solvelist:
      return {};

    default:
      return state;
  }
};

const initialstate = {
  count: 0,
  lists: [],
};

function App() {
  const [number, setNumber] = useState(0);
  const [listitem, setListItem] = useState("");

  const [money, bankDispatch] = useReducer(bankReducer, 0);
  const [todolistInfo, todoDispatch] = useReducer(todoReducer, initialstate);

  const onChangeValue = (e) => {
    setListItem(e.target.value);
  };

  return (
    <>
      <div className="wrap">
        <h2>간단한 useReducer 은행</h2>
        <p>잔고 : {money} 원</p>

        <div className="clickaction">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
            step="1000"
          />
          <button
            onClick={() => {
              bankDispatch({ type: BANKACTION_TYPES.deposit, payload: number });
            }}
          >
            예금 +
          </button>
          <button
            onClick={() => {
              bankDispatch({
                type: BANKACTION_TYPES.withdraw,
                payload: number,
              });
            }}
          >
            출금 -
          </button>
        </div>
      </div>

      <div className="wrap">
        <h2>TODO LIST</h2>
        <p>LIST의 갯수 : {todolistInfo.count}</p>
        <div className="clickaction">
          <input
            type="text"
            placeholder="LIST를 추가해주세요."
            value={listitem}
            onChange={onChangeValue}
          />
          <button
            onClick={() => {
              todoDispatch({
                type: TODOACTION_TYPES.addlist,
                payload: { listitem },
              });
            }}
          >
            LIST 추가
          </button>
        </div>

        {todolistInfo.lists.map((list) => {
          return (
            <TodoListItem
              key={list.id}
              name={list.name}
              todoDispatch={todoDispatch}
              id={list.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
