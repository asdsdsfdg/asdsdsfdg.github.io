const toDoForm = document.querySelector(".to-do-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".to-do-list");

const TODOS_KEY = "todo";

let toDoArray = [];

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function onToDoSubmit(event) {
  event.preventDefault();
  const todoValue = toDoInput.value;
  const forToDoObject = {
    id: Date.now(),
    value: todoValue,
  };
  toDoArray.push(forToDoObject);
  toDoInput.value = "";
  makeToDoList(forToDoObject);
}

function makeToDoList(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.value;
  //   const button = document.createElement("button");
  //   button.innerText = "❌";
  const button = document.createElement("input");
  button.type = `submit`;
  button.value = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", onToDoSubmit);
