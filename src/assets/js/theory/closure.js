const log = console.log;

// 함수, 클래스~~~
function 함수() {
  return "1";
}
함수();

const 사람 = {
  name: "아름",
  나이: 20,
};
const 사람1 = {
  name: "아름2",
  나이: 21,
};
const 사람2 = {
  name: "아름3",
  나이: 22,
};
log(사람);
const 사람어레이 = [
  { name: "아름", 나이: 22 },
  { name: "아름", 나이: 22 },
  { name: "아름", 나이: 22 },
  { name: "아름", 나이: 22 },
];

function 클래스(이름, 나이) {
  this.name = 이름;
  this.age = 나이;
}
var 아름 = new 클래스("아름", 22);
var 아름2 = new 클래스("아름1", 23);
var 아름3 = new 클래스("아름2", 24);
log(아름);
log(아름2);
log(아름3);

// OOP
// es6^
// class 동물 {
//   public name: String = '창조자';
//   public age: Number = 0;
// }
// const 사자 = new 동물();
// 사자.name

// 전역스코프
// es5
function 클로저(initNumber) {
  // 함수 스코프
  var count = initNumber; // 맴버변수
  return function () {
    // 렉시컬 스코프 => 함수 스코프 => 스코프 체인
    return count++;
  };
}
const n = new 클로저(100);
log(n());
log(n());
log(n());

// 즉시함수, 즉시실행함수...
const counter = (function () {
  var count = 0;
  return function () {
    return count++;
  };
})();
log(counter());
log(counter());
log(counter());

// 비동기처리~~~
// 스코프 : 함수스코프, 렉시컬스코프, 블록스코프, 전역스코프
// 블록스코프 : 먹는 변수 타입들이 따로 존재한다. => const, let
// 호이스팅 : 올리기 => var
function timer() {
  // es6
  for (var i = 0; i < 10; i++) {
    // es5
    (function (loop) {
      setTimeout(function () {
        console.log(loop);
      }, 100);
    })(i);
  }
  // console.log(`i = ${i}`);
}
timer(); // 0, 1, 2....

// 실행컨텍스트 : 선언, 초기화, 실행
// var: 선언, 초기화, 실행 =>
// const, let: 선언, 초기화 =>
let loop = 123123;
log(`loop = ${loop}`);

// const toggle = ?
// 'button'.querySelect('#button').addEventListner('click', toggle());

const label = "red"; // blue
