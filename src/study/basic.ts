import {Todo } from '../reducer/types/Todo';

function todos(todo: Partial<Todo>) {
  
}

todos({name: '3324', id: 12123})

// OOP(객체지향프로그래밍) , FP(함수형프로그래밍)
// OOP => class component
// FP => hook : 함수형프로그래밍 
// 1. 순수함수 
// 2. 불변값을 유지하라

const 객체아름이1 = {
  name: "아름",
  addr: "성남",
};
const 객체아름이2 = {
  name: "아름1",
  addr: "성남2",
};
const 객체아름이3 = {
  name: "아름2",
  addr: "성남3",
};

// getter, setter pattern 

class 아름이 {
  // private name: string = '아름이'; // public, private, protected
  // public addr: string;

  // 슈가싱텍스 (설탕문법)
  // public setName(name) {
  //   this.name = name;
  // }

  // public getName() {
  //   return this.name;
  // }

  #_name: string;

  get name() {
    this.#_name;
  }

  set name(n: string) {
    this.#_name = n;
  }
}

const 아름1 = new 아름이();
const 아름2 = new 아름이();
const 아름3 = new 아름이();

아름1.name


class 회원 {
  name: string;
  age: number;
}

type 멤버 = {
  name: string; age: number;
}

interface 인터멤버 {
  name: string, age: number;
}

function getJoinMember(member: 인터멤버) {
  
}

class Calc {
  더하기(x, y) {
    return x + y;
  }
}

// 클래스기반으로 개발을 하면 불변으로 만들수 잇으나, 기본은 변수를 수정한다. => 명령형 프로그래밍
// 함수형 기반으로 개발을 하면 불변으로 개발을 무조건 하게 되있고, 변수를 복사해서 수정한다. => 선언형 프로그래밍

// 1. 쓰레드 세이프 하게 개발이 가능하다. 

// t1 => a <= t2 : 데드락, 세마포어... 멀티쓰레드, 동기성... 
// 비동기 프로그래밍 callback, promise ... callstack ... que... event loop 


function add(x, y) {
  if (typeof x === 'number' && typeof x === 'number') {
    const sum = parseInt(x) + parseInt(y);
    return sum;
  } else {
    return 0;
  }
}

function addType(x: number, y: number) {
  return x + y;
}

addType(1, 'ishdfkshdkfjs');

add(1,2);
add(1.000, 2.111);

add(1, 'skldjflksdj'); // 3, 12

