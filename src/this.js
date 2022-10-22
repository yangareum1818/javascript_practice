// prototype
// class기반의 함수는 파스칼 케이스를 사용한다. User ( 생성자함수 )
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}
User.prototype.getFullName = function () {
  return `이름은 ${this.firstName}이고, 성은 ${this.lastName}입니다.`;
};
// yangeille <- 이 부분을 인스턴스라고 한다.
const yangeille = new User("eille", "yang");
const horiPark = new User("hori", "Park");
const yollJo = new User("yoll", "Jo");
console.log(yangeille.getFullName());
console.log(horiPark.getFullName());
console.log(yollJo.getFullName());

// this
var a = 1;
b = 2;

console.log("a", a);
console.log("window.a", window.a);
console.log("this.a", this.a);
console.log("b", b);
console.log("window.b", window.b);
console.log("this.b", this.b);

var afunc = function (x) {
  console.log(x);
};
afunc(1);

function afunc2() {
  console.log(this);
}
afunc2();

function afunc3() {
  console.log(this);
  function afunc3_1() {
    console.log(this);
  }
  afunc3_1();
}
afunc3();

var obj = {
  amothod: function () {
    console.log("amothod", this);
    var func4 = () => {
      console.log("func4", this);
    };
    func4();
  },
};
obj.amothod();

var obj2 = {
  amothod: function () {
    setTimeout(() => {
      console.log("obj2", this);
    }, 1000);
  },
};
obj2.amothod();

const user = {
  name: "areum",
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};
user.normal();
user.arrow();

const timer = {
  name: "yang",
  timeout: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 2000);
  },
};
timer.timeout();

const timer2 = {
  name: "yang",
  timeout: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 4000);
  },
};
timer2.timeout();

// this 생성자 호출
var name = "hahaha";
var age = "14";
var breed = "yajasu";

var Dog = function (name, age) {
  this.breed = "Shih Tzu";
  this.name = name;
  this.age = age;
};

var achoco = Dog("초코", 5);
var anabi = new Dog("나비", 9);

console.log(achoco, anabi);

// apply, call 메서드 활용 (문자열)
var start = "hello,";

Array.prototype.push.call(start, ", javascript");
Array.prototype.concat.call(start, ", javascript");
Array.prototype.every.call(start, function (char) {
  return char !== "";
});
Array.prototype.some.call(start, function (char) {
  return char !== "";
});

var newArr = Array.prototype.map.call(start, function (char) {
  return char + "!";
});

console.log(newArr);

var newStart = Array.prototype.reduce.apply(start, [
  function (string, char, i) {
    return string + char + i;
  },
  "",
]);
console.log(newStart);

var name = "hello, yang";
var arr = Array.from(name);
console.log(arr);

// 생성자 함수에서 메서드 활용
function AnimalType(name, age) {
  this.name = name;
  this.age = age;
}
function Dog(name, age, type) {
  AnimalType.call(this, name, age);
  this.type = type;
}
function Cat(name, age, color) {
  AnimalType.apply(this, [name, age]);
  this.color = color;
}

var dogtype = new Dog("초코", 5, "bulldog");
var cattype = new Cat("나비", 9, "white");

console.log(dogtype, cattype);
