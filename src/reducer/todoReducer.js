export const TODOACTION_TYPES = {
  addlist: "add-todo",
  removelist: "remove-todo",
  solvelist: "solve-todo",
};

export const todoReducer = (state, action) => {
  console.log("todolist", state, action);

  switch (action.type) {
    case TODOACTION_TYPES.addlist:
      const listname = action.payload.listitem;
      const newList = {
        id: Date.now(),
        name: listname,
        isHere: false,
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
      return {
        count: state.count,
        lists: state.lists.map((list) => {
          // 삭제와 동일하게 id로 분별해주고 map메소드를 이용해 조건문으로 list의 id값이 action.payload.id(dispatch: payload로 id로 넘겨준 값)일 때 ...list를 그대로 가지고 있고 isHere값으로만 부정일때 isHere값이 변한다.
          // isHere는 span태그를 onClick했을 때 dispatch를 준 type과 id이고 style은 삼항연산자로 조건을 주었다.
          if (list.id === action.payload.id) {
            return {
              ...list,
              isHere: !list.isHere,
            };
          }
          return list;
        }),
      };

    default:
      return state;
  }
};

export const initialstate = {
  count: 0,
  lists: [],
};
