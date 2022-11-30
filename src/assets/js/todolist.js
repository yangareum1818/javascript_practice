const todoForm = document.querySelector(".form_group");
const todoInput = todoForm.querySelector(".todo_input");
const todoListUI = document.querySelector(".todo");
const TODOLIST_KEY = "todolist";
let spaceToDo = [];

function saveToDo() {
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(spaceToDo));
}

function totalCount() {
  const todoTotal = document.querySelector(".total");
  todoTotal.innerText = `총 리스트 갯수 : ${spaceToDo.length} 개`;

  todoTotal.append();

  saveToDo();
}

function deleteToDo(e) {
  // console.log(e);
  const todoli = e.target.parentElement;
  // console.log(todoli);

  const todoClear = spaceToDo.filter((todo) => {
    // console.log(todo, todoli, parseInt(todoli.id), todoli.id);
    return todo.id !== parseInt(todoli.id);
  });
  spaceToDo = todoClear;

  // console.log(spaceToDo.length);
  // console.log(spaceToDo.length + 1);
  // console.log(getToDo.length - 1);
  todoli.remove();
  saveToDo();
  totalCount();
}

function drawingTodo(newToDo) {
  const todoList = document.createElement("li");
  const todoCheckBox = document.createElement("input");
  const todoText = document.createElement("span");
  const deleteBtn = document.createElement("button");

  console.log("getToDo", getToDo);
  console.log("spaceToDo", spaceToDo);
  const { id, text, checked } = newToDo;

  todoList.id = id;
  todoCheckBox.type = "checkbox";
  todoCheckBox.checked = checked;
  todoText.textContent = text;
  deleteBtn.textContent = "삭제할래요 버튼";

  todoListUI.prepend(todoList);

  todoList.appendChild(todoCheckBox);
  todoList.appendChild(todoText);

  function todoChecked(event) {
    const checkTarget = event.currentTarget.checked;
    event.currentTarget.checked = todoCheckBox.checked;

    if (checkTarget) {
      console.log(checkTarget);
      todoText.style.textDecoration = "line-through";
      todoList.appendChild(deleteBtn);
    } else {
      console.log(checkTarget);
      todoText.style.textDecoration = "none";
      todoList.removeChild(deleteBtn);
    }
  }
  totalCount();

  todoCheckBox.addEventListener("click", todoChecked);
  deleteBtn.addEventListener("click", deleteToDo);
}

function todoSubmitHandler(e) {
  e.preventDefault();

  const InputValue = todoInput.value;
  todoInput.value = "";

  const dDay = Date.now();
  console.log(dDay);

  const newToDoObj = {
    // id: Date.now(),
    id: spaceToDo.length + 1,
    text: InputValue,
    checked: false,
  };

  spaceToDo.push(newToDoObj);

  saveToDo();
  totalCount();
  drawingTodo(newToDoObj);
}
todoForm.addEventListener("submit", todoSubmitHandler);

const getToDo = JSON.parse(localStorage.getItem(TODOLIST_KEY));

if (getToDo !== null) {
  console.log(getToDo);
  spaceToDo = getToDo;
  getToDo.forEach(drawingTodo);
}
