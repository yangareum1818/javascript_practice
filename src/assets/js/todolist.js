const todoForm = document.querySelector(".form_group");
const todoInput = todoForm.querySelector(".todo_input");
const todoListUI = document.querySelector(".todo");
const TODOLIST_KEY = "todolist";
let spaceToDo = [];

function saveToDo() {
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(spaceToDo));
}

function deleteToDo(e) {
  console.log(e);
  const todoli = e.target.parentElement;
  console.log(todoli);

  const todoClear = spaceToDo.filter((todo) => {
    console.log(todo, parseInt(todoli.id), todoli.id);
    return todo.id !== parseInt(todoli.id);
  });
  spaceToDo = todoClear;

  todoli.remove();
  saveToDo();
}

function drawingTodo(newToDo) {
  const todoTotal = document.querySelector(".total");
  const todoList = document.createElement("li");
  const todoCheckBox = document.createElement("input");
  const todoText = document.createElement("span");
  const deleteBtn = document.createElement("button");

  console.log(newToDo);
  todoList.id = newToDo.id;
  todoTotal.innerText = `총 리스트 갯수 : ${todoList.id} 개`;
  todoCheckBox.type = "checkbox";
  todoCheckBox.checked = newToDo.checked;
  todoText.textContent = newToDo.text;
  deleteBtn.textContent = "삭제할래요 버튼";

  todoListUI.prepend(todoList);

  todoTotal.append();
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

  todoCheckBox.addEventListener("click", todoChecked);
  deleteBtn.addEventListener("click", deleteToDo);
}

function todoSubmitHandler(e) {
  e.preventDefault();

  const InputValue = todoInput.value;
  todoInput.value = "";

  const newToDoObj = {
    id: spaceToDo.length + 1,
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
  getToDo.forEach((todo) => drawingTodo(todo));
}
