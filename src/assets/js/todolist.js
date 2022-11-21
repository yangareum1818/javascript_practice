const todoForm = document.querySelector(".form_group");
const todoInput = todoForm.querySelector(".todo_input");

let spaceToDo = [];

// function order(spaceToDo) {
//   spaceToDo.sort((dateA, dateB) => {
//     return dateB.id - dateA.id;
//   });

//   return console.log(spaceToDo);
// }
// order(spaceToDo);

function saveToDo() {
  localStorage.setItem("todolist", JSON.stringify(spaceToDo));
}

function clearToDo(e) {
  const todoli = e.target.parentNode;
  console.log(todoli);
  todoli.remove();
}

function drawingTodo(newToDo) {
  const todoTotal = document.querySelector(".total");
  const todoListUI = document.querySelector(".todo");
  const todoList = document.createElement("li");
  const todoCheckBox = document.createElement("input");
  const todoText = document.createElement("span");
  const deleteBtn = document.createElement("button");

  todoTotal.innerText = `총 리스트 갯수 : ${newToDo.length} 개`;
  todoListUI.appendChild(todoList);
  todoCheckBox.type = "checkbox";
  todoCheckBox.checked = newToDo.checked;
  todoText.textContent = newToDo.text;
  deleteBtn.textContent = "삭제할래요 버튼";

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
    length: spaceToDo.length + 1,
  };

  spaceToDo.push(newToDoObj);

  saveToDo();
  drawingTodo(newToDoObj);
}

todoForm.addEventListener("submit", todoSubmitHandler);

const getToDo = JSON.parse(localStorage.getItem("todolist"));
if (getToDo !== null) {
  getToDo.forEach((newToDo) => {
    spaceToDo.push(newToDo);
    drawingTodo(newToDo);

    console.log(newToDo);
  });
}
