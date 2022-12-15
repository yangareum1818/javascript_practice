const todoForm = document.querySelector(".form_group");
const todoInput = todoForm.querySelector(".todo_input");
const todoListUI = document.querySelector(".todo");
const allCheckedBtn = document.querySelector(".all_checked");
const allDeleteBtn = document.querySelector(".all_delete");
const TODOLIST_KEY = "todolist";
let spaceToDo = [];

function saveToDo() {
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(spaceToDo));
}

// function allDelete() {

// const reallyDeletMessage = confirm("정말 모두 삭제 하시겠습니까 ?");
// if (!reallyDeletMessage) {
//   return false;
// } else {
//   alert("제발 다 삭제 되게 해주세요 !!!!");
//   allDelete();
//   console.log("삭제 완ㄴ료가 되야해!!!");
// }

//   const allList = todoListUI.childNodes;

//   allToDo = spaceToDo;

//   spaceToDo = spaceToDo.filter((todo) => todo !== allToDo.includes(todo));

//   console.log(allList);

//   saveToDo();
//   totalCount();
// }

// function allChecked(newToDo) {
//   // console.log(newToDo);
//   const checkedAll = document.querySelectorAll('input[type="checkbox"]');
//   // 모두삭제 버튼 활성화 & 비활성화
//   if (spaceToDo.length === 0) {
//     allCheckedBtn.disabled = true;
//   } else {
//     allCheckedBtn.disabled = false;
//   }

//   saveToDo();

//   console.log(spaceToDo);
//   spaceToDo = spaceToDo.includes(
//     (check) => check.checked == checkedAll.checked
//   );

//   allDeleteBtn.addEventListener("click", allDelete);
// }
/**
 * 해야할 것.
 * 1. deleteToDo : checked가 된 list삭제
 * 2. 모두 선택버튼 : list가 1개 이상이면 활성화
 * 3. 모두 선택버튼 클릭시 : 모든 list가 checked가 됌 ( 과 동시에 모두삭제버튼 활성화 )
 * 4. 모두삭제버튼 클릭시 : allDelete()에 로컬스토리지가 아닌 arr.every()메소드 이용해서 모두 삭제.
 *
 * 2. 선택삭제 : checked가 true인 list들만 삭제.
 */

const deleteToDo = (e) => {
  // console.log(e);
  const todoli = e.target.parentElement;
  // console.log(todoli);

  const todoClear = spaceToDo.filter((todo) => {
    // console.log(todo, todoli, parseInt(todoli.id), todoli.id);
    return todo.checked !== todoli.checked;
  });
  spaceToDo = todoClear;
  // console.log(spaceToDo.length);
  // console.log(spaceToDo.length + 1);
  // console.log(getToDo.length - 1);
  todoli.remove();
  saveToDo();
  totalCount();
};

const todoChecked = (e) => {
  const todoList = e.target.parentElement;
  const todoText = e.target.nextElementSibling;
  // !!!!input의 checked를 찾아서 spaceToDo checked를 재할당 해줘야하겠어 !
  // const todoCheck =

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제할래요 버튼";

  const checkTarget = e.target.checked;
  // e.currentTarget.checked = e.target.checked;

  if (checkTarget) {
    // true;
    todoText.style.textDecoration = "line-through";
    todoList.appendChild(deleteBtn);
  } else {
    // false;
    todoText.style.textDecoration = "none";
    todoList.removeChild(deleteBtn);
  }

  saveToDo();

  deleteBtn.addEventListener("click", deleteToDo);
};

function totalCount() {
  const todoTotal = document.querySelector(".total");
  todoTotal.innerText = `총 리스트 갯수 : ${spaceToDo.length} 개`;

  // 모두선택 버튼 활성화 & 비활성화
  if (spaceToDo.length === 0) {
    allCheckedBtn.disabled = true;
  } else {
    allCheckedBtn.disabled = false;
  }

  todoTotal.append();

  // saveToDo();
}

function drawingTodo(newToDo) {
  const todoList = document.createElement("li");
  const todoCheckBox = document.createElement("input");
  const todoText = document.createElement("span");

  // console.log("getToDo", getToDo);
  // console.log("spaceToDo", spaceToDo);
  const { id, text, checked } = newToDo;

  todoList.id = id;
  todoCheckBox.type = "checkbox";
  todoCheckBox.checked = checked;
  todoText.textContent = text;

  todoListUI.prepend(todoList);

  todoList.appendChild(todoCheckBox);
  todoList.appendChild(todoText);

  totalCount();

  todoCheckBox.addEventListener("click", todoChecked);
}

function todoSubmitHandler(e) {
  e.preventDefault();

  const InputValue = todoInput.value;
  todoInput.value = "";

  const dDay = Date.now();
  console.log(dDay);

  const newToDoObj = {
    id: Date.now(),
    // id: spaceToDo.length + 1, <= error 이슈 : 이렇게 만들면 추가삭제를 반복하다 보면 length의 순서가 겹쳐지게 되는데 그때 list가 id값이 동일한 두개가 생성이 되기때문에 2개의 동일한 list가 삭제된다.
    text: InputValue,
    checked: false,
  };

  spaceToDo.push(newToDoObj);

  saveToDo();
  drawingTodo(newToDoObj);
}
todoForm.addEventListener("submit", todoSubmitHandler);

const getToDo = JSON.parse(localStorage.getItem(TODOLIST_KEY));

if (getToDo !== null) {
  console.log(getToDo);
  spaceToDo = getToDo;
  getToDo.forEach(drawingTodo);
}
