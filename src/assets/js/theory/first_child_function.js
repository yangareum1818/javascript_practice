/*
* ts로 일급함수.
function ul(child: string) {
  return `<ul> ${child} </ul>`;
}

function ol(child) {
  return `<ol>${child}</ol>`;
}

function makeLI(
  container: (child: string) => string,
  contents: string[]
): string {
  const liList = [];

  for (const content of contents) {
    liList.push(`<li>${content}</li>`);
  }

  return container(liList.join(''));
}

const htmlUL = makeLI(ul, ['월', '화', '수', '목', '금', '토', '일']);
const htmlOL = makeLI(ol, ['봄', '여름', '가을', '겨울']);

console.log(htmlUL);
console.log(htmlOL);
*/

function salePrice(discountRate, price) {
  return price - price * (discountRate * 0.01);
}

console.log("여름 세일 - " + salePrice(30, 567000));
console.log("겨울 세일 - " + salePrice(10, 567000));

function discountPrice(discountRate) {
  return function (price) {
    return price - price * (discountRate * 0.01);
  };
}

console.log("여름 세일 - " + discountPrice(30)(567000));
console.log("겨울 세일 - " + discountPrice(10)(567000));

let summerPrice = discountPrice(30);
let winterPrice = discountPrice(10);

console.log("여름 세일 - " + summerPrice(567000));
console.log("겨울 세일 - " + winterPrice(567000));

// 함수를 변수에 담아 이름을 지어준다면, "여름, 겨울 세일"을 지웠을 때 어떤 함수인지 함수만 보고 알 수 있다.
