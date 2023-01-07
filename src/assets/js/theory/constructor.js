/* 더하기, 곱하기, 제곱 */
function Calculator() {
  this.read = function () {
    this.a = +prompt("a의 값은 ?");
    this.b = +prompt("b의 값은 ?");
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
  this.square = function () {
    return this.a ** this.b;
  };
}
const calculator = new Calculator();
calculator.read();

console.log("sum ?", calculator.sum());
console.log("mul ?", calculator.mul());
console.log("square ?", calculator.square());

/* 정해져있는 value값에 사용자가 작성한 숫자와 계산 하기 (더 하기) */
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("고정값 적으신 숫자와 합해집니다.");
  };
}
const accumulator = new Accumulator(4);
accumulator.read();
console.log(accumulator.value);
