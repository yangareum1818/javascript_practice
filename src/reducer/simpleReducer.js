// type은 Object로 만들어 코드를 더욱 깔끔하게 해준다.
export const BANKACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

// reducer는 두가지의 인자를 받는다.
// 첫번째 인자는 현재의 state값을 받는다. (state, ) money의 값인 state를 받는다.
// 두번째 인자로는 action을 받는다. ( , action) state를 변경해달라는 요구사항인 action을 받는다.
export const bankReducer = (state, action) => {
  console.log("reducer 작동 중인거다 ?", state, action);

  switch (action.type) {
    case BANKACTION_TYPES.deposit:
      return state + action.payload;
    case BANKACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};
