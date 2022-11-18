// 분석코드
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
// 로컬 스토리지에 들어갈 key값을 중복되어 사용이 되어 변수로 만들어준다.
const TODOS_KEY = "todos";

// object객체 list가 쌓일 빈 array를 생성한다.
let toDos = [];

// 3.
// list가 스토리지에 저장될 함수가 호출된다.
function saveToDo() {
  // 로컬스토리지에 키와 값을 보관해줄 setItem메소드를 사용해준다.
  // !!key, value의 값은 문자열로 넣어주어야 한다.
  // 인자로 첫번째로 key값을 넣어주고, 두번째 인자로 value값을 넣어주는데 object인 객체를 문자열로 변환해줄 JSON의 stringify메소드를 사용해야 한다. 인자로 빈 배열을 만든 toDos를 넣어준다.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// 4.
function deleteToDo(e) {
  // 삭제버튼의 부모요소를 찾아가는 변수를 하나 만들어준다. button의 부모는 li태그이다.
  const li = e.target.parentElement;
  // 저장되어 있는 배열안에서 filter메소드를 이용해 필터링을 해준다.
  // 화살표 함수를 이용해 toDos의 내부에 저장되어 있는 id값과 해당li의 id값이 같지 않는 것을 찾아준다.
  // !!문자열로 저장이 되어 있기 때문에 숫자로 바꿔주는 parseInt메소드를 활용해준다.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // 해당하는 li를 삭제해준다.
  li.remove();
  // 저장되어 있는 list와 씽크를 맞춰야 하기 때문에 saveToDo함수도 호출해준다.
  saveToDo();
}

// 2.
// newToDoObj를 인자로 받는다.
function paintToDo(newToDo) {
  // li태그가 생성이된다.
  const li = document.createElement("li");
  // li의 id값은 인자로 받은 newToDoObj의 id 값이 id가 된다.
  li.id = newToDo.id;
  // span과 button태그가 생성된다.
  const span = document.createElement("span");
  const button = document.createElement("button");
  // span태그의 text는 인자로 받은 newToDoObj의 text를 받게된다.
  span.innerText = newToDo.text;
  // 버튼은 'x'의 text의 버튼이 생성된다.
  button.innerText = "✘";
  // 버튼을 클릭하면 deleteToDo함수가 호출된다.
  button.addEventListener("click", deleteToDo);

  // toDoList의 자식으로 li, li자식으로 span, button태그가 화면에 뿌려진다.
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// 1.
function handleToDoSubmit(e) {
  // submit될 때 마다 새로고침 방지.
  e.preventDefault();
  // input의 value값을 찾는다.
  const newToDo = toDoInput.value;
  // input에 입력후 submit을 했을 때 input창에 아무것도 남아 있지 않게 하기 위해 input을 초기화 해준다.
  toDoInput.value = "";
  // 브라우저에 key, value값을 저장해 줄 object객체를 만들어준다. (새로고침을 해도 사라지지 않게, 그러므로 이후에 더 많은 기능을 만들어 나갈 수 있다. 정렬순서를 바꾼다 던지.. )
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };

  // 1-1.
  // 빈 array에 새로운 데이터 객체들을 넣어준다.
  toDos.push(newToDoObj);
  // submit함수가 호출될 때 화면을 보여주는 paintToDo에 인자에 새로운 객체인 newToDoObj를 넣어주며 호출해준다.
  paintToDo(newToDoObj);
  // submit함수가 호출이 될때 saveToDo함수도 호출해준다.
  saveToDo();
}

// enter, addBtn 두가지의 ClickEvent를 Form전체를 submit으로 넘겨준다.
toDoForm.addEventListener("submit", handleToDoSubmit);

// 로컬스토리지에서 getItem을 이용해 key에 해당하는 value의 값을 받아오는 변수를 만들어준다.
const savedToDos = localStorage.getItem(TODOS_KEY);

// 만약에 로컬스토리지에서 조회한 key값이 null이 아닐 경우에
// 밑에 조건이 이뤄진다.
if (savedToDos !== null) {
  // getItem으로 조회해서 가져온 key가 문자열인 string이기 때문에 object를 변환해주어야 하기 때문에 JSON에 내장되어 있는 parse 메소드를 사용해 object객체로 변환해준다.
  const parsedToDos = JSON.parse(savedToDos);
  // toDos array를 변환해 가져와 변수로 지정해준 parsedToDos를 대입해준다.
  toDos = parsedToDos;
  // object로 변환된 객체들을 forEach문으로 paintToDo함수를 호출해서 뿌려준다.
  parsedToDos.forEach(paintToDo);
}
