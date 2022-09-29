# React의 하나의 훅인 useReducer로 상태관리

### useReducer의 기본 문법
``` javascript
const [state, dispatch] = useReducer(reducer, initialstate);
```
state = 새로 들어가는 state의 값
dispatch = state의 업데이트를 위해 요구사항을 들어주는 역할
reducer = state를 업데이트, 기록하고 조건을 주는 은행 회계직원 같은 역할
initialstate = state의 초기값
(대부분 복잡한 상태를 관리해주고 로직을 짜주기 때문에 useState처럼 숫자가 들어가는 경우는 거의 없고, 객체를 이용한 함수명이 들어간다.)

## 1. 간단한 은행 예금, 출금 시키고 표출시키기
## 2. 조금 더 복잡한 TODOLIST 만들기