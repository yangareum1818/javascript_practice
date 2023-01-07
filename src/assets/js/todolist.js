const todoForm = document.querySelector(".form_group");
const todoInput = todoForm.querySelector(".todo_input");
const todoListUI = document.querySelector(".todo");
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
 * 1. list가 checked 되었을 때 toggle, appendChild or removeChild를 이용해 클래스명추가 (텍스트, 버튼) - 완료
 * 2. 선택한 list삭제버튼 클릭시 삭제 ( 로컬스토리지까지 삭제. ) - 완료
 * 3. list 갯수가 0이 되었을 때, ( empty : 화면에 보이게, button : 비활성화 ) - 완료
 * 4-1. checked된 list 갯수 구하기.
 * 4-2. 1개이상 checked 되었을 때, 선택된 list버튼 모두삭제(allDeleteBtn) 활성화
 * 5. 모두 checked버튼 클릭시, 모든 list checkbox가 checked
 * 6. 선택된 list 모두 삭제 클릭시, 모두 삭제.
 */

function listZero() {
  const allCheckedBtn = document.querySelector(".all_checked");
  const emptyText = document.querySelector(".empty");

  // list의 값이 0일 경우 : 모두선택 버튼 활성화 & 비활성화, empty
  if (spaceToDo.length === 0) {
    emptyText.style = "display : block";
    allCheckedBtn.disabled = true;
  } else {
    emptyText.style = "display : none";
    allCheckedBtn.disabled = false;
  }
}

function deleteToDo(e) {
  // console.log(e);
  const todoli = e.target.parentElement;

  const todoOneDelete = spaceToDo.filter((todo) => {
    // console.log("MyLog", todo, todoli, todo.id, todoli.id);
    return todo.id !== parseInt(todoli.id);
  });
  spaceToDo = todoOneDelete;

  todoli.remove();
  saveToDo();
  totalCount();
  listZero();
}

function totalCount() {
  const todoTotal = document.querySelector(".total");
  todoTotal.innerHTML = `${spaceToDo.length}`;

  todoTotal.append();

  saveToDo();
}

function drawingTodo(newToDo) {
  const todoList = document.createElement("li");
  const todoCheckBox = document.createElement("input");
  const todoText = document.createElement("p");
  const deleteBtn = document.createElement("button");

  const { id, text, checked } = newToDo;

  todoList.id = id;
  todoCheckBox.type = "checkbox";
  todoCheckBox.name = "list";
  todoCheckBox.checked = checked;
  todoText.textContent = text;
  deleteBtn.innerHTML = "이것만 삭제할거야 버튼";

  todoText.classList.add("todo_text");
  deleteBtn.classList.add("delete_btn");

  todoListUI.prepend(todoList);

  todoList.appendChild(todoCheckBox);
  todoList.appendChild(todoText);
  todoList.appendChild(deleteBtn);

  const toggleChecked = function () {
    // const allDeleteBtn = document.querySelector(".all_delete");

    // const chkLength = document.querySelector(".chk");
    // chkLength.innerHTML = `${spaceToDo.length}`; // 수정.

    const textChecked = "checked";

    let self = this;
    console.log("self", self);

    return function () {
      todoText.classList.toggle(textChecked);
      deleteBtn.classList.toggle(textChecked);

      // 조건문 해야됌.
      // 1개 이상 checked된 input이 있다면 allDeleteBtn 활성화.
      // if (todoCheckBox.checked) {
      //   allDeleteBtn.disabled = false;
      // }

      // checked되었을때 true , 안되었을 때 false
      const chkArray = spaceToDo.flatMap((todo) => {
        console.log(todo, todo.checked);

        return todo.id;
      });
      spaceToDo = chkArray;
    };
  };
  totalCount();
  listZero();

  todoCheckBox.addEventListener("click", toggleChecked);
  deleteBtn.addEventListener("click", deleteToDo);
}

function todoSubmitHandler(e) {
  e.preventDefault();

  const InputValue = todoInput.value;
  todoInput.value = "";

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
