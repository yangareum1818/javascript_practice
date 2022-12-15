/* 
For문 으로 별찍기
repeat() : 문자열 반복메소드
=> () 양의 정수, 무한대보다 적어야 함, 최대 문자열의 크기를 넘기면 안된다.
*/

// 1 2 3 4 5
for (let i = 0; i < 5; i++) {
  console.log("+", "*".repeat(i + 1));
}
// 5 4 3 2 1
for (let i = 5; i >= 1; i -= 1) {
  console.log("-", "*".repeat(i));
}
// i가 0이 고정인상태에서 5 4 3 2 1
for (let i = 0; i < 5; i++) {
  console.log("i는 0 고정 + 1", "*".repeat(5 - i));
}

// 1 3 5 7 9
// 반복문이 10번이 돌기 때문에 비효율적
for (let i = 0; i < 10; i++) {
  while (i % 2 === 0) {
    // i를 2로 나눴을 때, 나머지가
    i++;
    console.log("1. 홀수 +", "*".repeat(i));
    break;
  }
}
for (let i = 1; i < 10; i += 2) {
  console.log("2. 홀수 +", "*".repeat(i));
}
for (let i = 1; i < 10; i += 2) {
  if (i % 2 === 0) {
    continue;
  }
  console.log("3. 홀수 +", "*".repeat(i));
}

// 9 7 5 3 1
for (let i = 9; i > 0; i -= 2) {
  console.log("1. 홀수 -", "*".repeat(i));
}
for (let i = 10; i > 0; i--) {
  if (i % 2 === 0) {
    continue;
  }
  console.log("2. 홀수 -", "*".repeat(i));
}
// 반복문이 10번이 돌기 때문에 비효율적
for (let i = 10; i > 0; i--) {
  while (i % 2 === 0) {
    i--;
    console.log("3. 홀수 -", "*".repeat(i));
    break;
  }
}

// 공백찍기 힌트 - " ".repeat() + "*".repeat()
//  *****
//   ****
//    ***
//     **
//      *
for (let i = 0; i < 5; i++) {
  console.log(" ".repeat(i) + "*".repeat(5 - i));
}

//     *
//    **
//   ***
//  ****
// *****
for (let i = 0; i < 5; i++) {
  console.log(" ".repeat(5 - i) + "*".repeat(i + 1));
}

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(
      " ".repeat((10 - i) / 2) + "*".repeat(i + 1) + " ".repeat((10 - i) / 2)
    );
  } else {
    console.log("예외 처리 중 .. 입니다 !");
  }
}

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
