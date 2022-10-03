export const BANKACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

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
