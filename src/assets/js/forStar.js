/* 
For문 으로 별찍기
repeat() : 문자열 반복메소드
=> () 양의 정수, 무한대보다 적어야 함, 최대 문자열의 크기를 넘기면 안된다.
if (i % 2 === 0)  => i를 2로 나눴을 때 0으로 떨어질 때 ( 짝수 구할 때 )
if (i % 2 === 1)  => i를 2로 나눴을 때 1으로 떨어질 때 ( 홀수 구할 때 )
if(i % 3 === 1) => 3으로 나눴을 때 1로 남을 때 => 1 ~ 9 = 1, 4, 7, 9

: 규칙을 찾자. : 반복문을 여러개 사용할 때 변수를 초기화 시켜주자.

while문
: 멈출 수 있는 무한반복문 사용하는 경우 사용된다. ( break 문 )
let i = 0; // 초기값 지정
while (true) { // 조건
    if ( i === 5) braek; // i가 5가 되었을 때 braek로 인하여 멈춰서 반복문이 종료 된다.
        console.log(i);
    i++; // 0에서 1씩 + 추가
}
: 코드 실행 건너뛰기 - 특정 조건에서만 실행되기를 원할 때 사용한다 ex) 짝수 홀수 값 구하기
( 컨티뉴 continue 문 ) 실행하면 그 뒤는 모두 무시
let i = 0;
while ( i < 10 ) {
    i++; // 1씩 증가
    if ( i % 2 === 0 ) { // i를 2로 나눈 나머지가 0일 경우 : 짝수
        continue; // if문의 조건에 부합한 값은 건너뛰기 ( 결국 홀수 구하기 )
    }
    console.log(i);
}

for문으로 5배수 구하기
for ( let i = 0; i < 100; i = i + 5 ) {
// i = i = 5를 i += 5 로 변경 가능
    console.log( i );
}

중첩 반복문
: 반복문 안에 반복문 ( 평소 이중첩, 삼중첩 반복문을 사용하고, 최악의 경우 4개의 반복문 까지 사용 되는것을 보는 경우가 있다. ) i j k h

’모두‘라는 단어가 들어간 상황을 해결해야 한다면 반복문을 사용.



*/

// 1 2 3 4 5
for (let i = 0; i < 5; i++) {
  console.log("+", i + 1);
}
// 5 4 3 2 1
for (let i = 5; i >= 1; i -= 1) {
  console.log("-", i);
}
// i가 0이 고정인상태에서 5 4 3 2 1
for (let i = 0; i < 5; i++) {
  console.log("i는 0 고정 + 1", 5 - i);
}

// 1 3 5 7 9
// 반복문이 10번이 돌기 때문에 비효율적
for (let i = 0; i < 10; i++) {
  while (i % 2 === 0) {
    // i를 2로 나눴을 때, 나머지가
    i++;
    console.log("1. 홀수 +", i);
    break;
  }
}
for (let i = 1; i < 10; i += 2) {
  console.log("2. 홀수 +", i);
}
for (let i = 1; i < 10; i += 2) {
  if (i % 2 === 0) {
    continue;
  }
  console.log("3. 홀수 +", i);
}

// 9 7 5 3 1
for (let i = 0; i < 9; i += 2) {
  console.log("1. 홀수(i=0고정) -", 9 - i);
}
for (let i = 9; i > 0; i -= 2) {
  console.log("2. 홀수 -", i);
}
for (let i = 10; i > 0; i--) {
  if (i % 2 === 0) {
    continue;
  }
  console.log("3. 홀수 -", i);
}
// 반복문이 10번이 돌기 때문에 비효율적
for (let i = 10; i > 0; i--) {
  while (i % 2 === 0) {
    i--;
    console.log("3. 홀수 -", i);
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
i = 0;
while (i < 5) {
  console.log(" ".repeat(i) + "*".repeat(5 - i));
  i++;
}

//     *
//    **
//   ***
//  ****
// *****
for (let i = 0; i < 5; i++) {
  console.log(" ".repeat(5 - i) + "*".repeat(i + 1));
}
i = 0;
while (i < 5) {
  console.log(" ".repeat(5 - i) + "*".repeat(i + 1));
  i++;
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
// 조건문 사용하지 않고
for (let j = 0; j < 9; j += 2) {
  console.log(
    " ".repeat((9 - j) / 2) + "*".repeat(j + 1) + " ".repeat((9 - j) / 2)
  );
}
i = 0;
while (i < 9) {
  console.log(
    " ".repeat((9 - i) / 2) + "*".repeat(i + 1) + " ".repeat((9 - i) / 2)
  );
  i += 2;
}
j = 0;
while (j < 9) {
  if (j % 2 === 0) {
    console.log(
      " ".repeat((9 - j) / 2) + "*".repeat(j + 1) + " ".repeat((9 - j) / 2)
    );
  }
  j++;
}

// ***********
//  *********
//   *******
//    *****
//     ***
//      *
for (let i = 0; i < 9; i += 2) {
  console.log(
    " ".repeat((i + 1) / 2) + "*".repeat(9 - i) + " ".repeat((i + 1) / 2)
  );
}
i = 0;
while (i < 9) {
  console.log(
    " ".repeat((i + 1) / 2) + "*".repeat(9 - i) + " ".repeat((i + 1) / 2)
  );
  i += 2;
}
j = 0;
while (j < 9) {
  if (j % 2 === 0) {
    console.log(
      " ".repeat((j + 1) / 2) + "*".repeat(9 - j) + " ".repeat((j + 1) / 2)
    );
  }
  j++;
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

/*
중첩 for문 짝수 없는 구구단 ( continue사용 )
*/

/*
!! 공책에 적어가면서 규칙을 찾아라 !!
1. 제일 밖에 있는 for문에서 부터 조건 하나 찍고 안으로 들어간다.
2. 두번째 for문이 작동 하고 조건에 맞는 10이하 전까지 계속 반복문이 돈다.
3. 다 돌았다면 다시 밖에 있는 for문의 조건으로 돌아가 하나의 조건을 찍고 다시 포문안으로 들어간다.
4. 안에 for문의 조건은 다시 1이되어서 다시 조건까지 맞춰 반복한다.
5. ... 무한반복

짝수 건너뛰기
i=1 j=1
i=1 j=3
i=1 j=5
i=1 j=7
i=1 j=9
...
i=3 j=1
i=3 j=3
i=3 j=5
...
i=5 j=1
i=5 j=3
i=5 j=5
*/

// 조건문 사용
for (i = 1; i < 10; i++) {
  if (i % 2 === 1) {
    for (j = 1; j < 10; j++) {
      if (j % 2 === 1) {
        console.log(i, j, i * j);
        continue;
      }
    }
  }
}

for (i = 1; i < 10; i++) {
  for (j = 1; j < 10; j++) {
    if (i % 2 === 0 || j % 2 === 0) continue;
    console.log(i, j, i * j);
  }
}

/* 중첩 반복문 다른 예시 */
for (let i = 1; i <= 1; i++) {
  for (let j = 1; j <= 5; j++) {
    let str = "list";
    str += j;
    console.log(str); // list1 list2 list3 list4 list5
  }
}

for (let i = 1; i <= 1; i++) {
  let str = "list";
  for (let j = 1; j <= 6; j++) {
    str += j;
  }
  console.log(str); // list123456
}
