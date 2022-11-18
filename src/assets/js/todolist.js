const todoForm = document.querySelector(".form_group");
const todoInput = todoForm.querySelector(".todo_input");

const spaceToDo = [];

function saveToDo() {
  localStorage.setItem("todolist", JSON.stringify(spaceToDo));
}

function clearToDo(e) {
  const todoli = e.target.parentNode;
  console.log(todoli);
  todoli.remove();
}

function drawingTodo(newToDo) {
  const todoListUI = document.querySelector(".todo");
  const todoList = document.createElement("li");
  const todoCheckBox = document.createElement("input");
  const todoText = document.createElement("span");
  const deleteBtn = document.createElement("button");

  todoListUI.appendChild(todoList);
  todoCheckBox.type = "checkbox";
  todoText.textContent = newToDo.text;
  todoCheckBox.checked = newToDo.checked;
  deleteBtn.textContent = "삭제할래요 버튼";

  todoList.appendChild(todoCheckBox);
  todoList.appendChild(todoText);

  function todoChecked(event) {
    const checkTarget = event.currentTarget.checked;
    event.currentTarget.checked = todoCheckBox.checked;

    if (checkTarget) {
      todoText.style.textDecoration = "line-through";
      todoList.appendChild(deleteBtn);
    } else {
      todoText.style.textDecoration = "none";
      todoList.removeChild(deleteBtn);
    }
  }

  todoCheckBox.addEventListener("click", todoChecked);
  deleteBtn.addEventListener("click", clearToDo);
}

function todoSubmitHandler(e) {
  e.preventDefault();

  const InputValue = todoInput.value;
  todoInput.value = "";

  const newToDoObj = {
    id: Date.now(),
    text: InputValue,
    checked: false,
  };

  spaceToDo.push(newToDoObj);

  saveToDo();
  drawingTodo(newToDoObj);
}

todoForm.addEventListener("submit", todoSubmitHandler);

const getToDo = localStorage.getItem("todolist");

// if (getToDo === null) {
//   drawingTodo();
// } else {
//   saveToDo();
// }
// console.log(getToDo);
