import React, { useReducer, useState } from "react";
import { BANKACTION_TYPES, bankReducer } from "./reducer/simpleReducer";
import {
  TODOACTION_TYPES,
  todoReducer,
  initialstate,
} from "./reducer/todoReducer";
import TodoListItem from "./todoList";
import "./App.css";

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
              isHere={list.isHere}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
