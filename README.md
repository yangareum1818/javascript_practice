# React의 하나의 훅인 useReducer로 상태관리

### useReducer의 기본 문법
``` javascript
const [state, dispatch] = useReducer(reducer, initialstate);
```

* `state` = 새로 들어가는 `state`의 값
* `dispatch` = `state`의 업데이트를 위해 요구사항을 들어주는 역할
* `reducer` = `state`를 업데이트, 기록하고 조건을 주는 은행 회계직원 같은 역할
* `initialstate` = `state`의 `초기값`
(대부분 복잡한 상태를 관리해주고 로직을 짜주기 때문에 `useState`처럼 숫자가 들어가는 경우는 거의 없고, 객체를 이용한 함수명이 들어간다.)
* **[새로운state, dispatch] = useReducer(리듀서 , 초기값(함수로 만든 객체, 직관적인 값인 0 등..이 들어갈 수 있다.) )**


#### REDUCER
* `reducer`는 두가지의 인자를 받는다.
* 첫번째 인자는 현재의 `state`값을 받는다. (state, ) money의 값인 `state`를 받는다.
* 두번째 인자로는 `action`을 받는다. ( , action) `state`를 변경해달라는 요구사항인 `action`을 받는다.

* `switch`문을 이용해 `case`에는 type을 넣어주고 return에는 action이 행했을 때 그 조건과 맞다면 값을 표출시켜준다.

```javascript
const [, ] = useReducer(bankReducer, );

const bankReducer = (state, action) => {
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
```

#### ACTION TYPE
* `action`의 `type`을 객체(**Object**)로 만들어 코드를 깔끔하게 만들어준다.
* `backReducer`함수 안에 들어갈 action을 간결하게 정리해뒀다고 생각하자.

```javascript
const BANKACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};
```

#### DISPATCH ,
```javascript
const [number, setNumber] = useState(0);
const [money, bankDispatch] = useReducer(, );

<p>잔고 : {money} 원</p>

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
```

* 초기값인 money를 화면에 보여질 수 있게 잔고 : `{money}` 넣어준다.
* 버튼에 요구를 들어주기 위해 버튼 내에 `dispatch`를 이용해서 `type`과 `payload`를 넣어준다.
* `payload`를 이용해 `input`에 적어둔 `value`값인 `number`이니 `number`의 만큼 넘겨준다.
* 버튼을 클릭했을 때 `reducer`의 함수가 `type action`의 조건과 맞는다면 `return`값이 보여질 것이다.


### 1. 간단한 은행 예금, 출금 시키고 표출시키기
```
useState로만으로도 만들 수 있는 간단한 기능이지만, 기초적인 것을 이해하기 위해 만들어 본 예제 이다.
```

### 2. 조금 더 복잡한 TODOLIST 만들기
```
1번의 예제보다는 조금 복잡한 기능과 구조를 가지고 있다고 생각하기 때문에 만들어 본 예제 입니다.
```
* 리스트를 작성하고 추가 버튼을 클릭하면 추가가 된다.
* 리스트의 글자를 클릭한다면 그 리스트는 글자색과 배경색이 반전이 되어 해결한 리스트를 해결 했다는 의미로 구분 할 수 있게끔 하였다.
* 삭제 버튼을 클릭하면 리스트는 삭제가 된다.