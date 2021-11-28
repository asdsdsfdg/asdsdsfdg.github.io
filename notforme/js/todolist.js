const toDoForm = document.querySelector(".to-do-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".to-do-list");

const TODOS_KEY = "todo";

let toDoArray = [];

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDoArray));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  //   const Data = JSON.parse(localStorage.getItem(TODOS_KEY));
  toDoArray = toDoArray.filter((item) => item.id !== parseInt(li.id));
  saveToDo();
}

function onToDoSubmit(event) {
  event.preventDefault();
  const forToDoObject = {
    id: Date.now(),
    value: toDoInput.value,
  };
  toDoArray.push(forToDoObject);
  toDoInput.value = "";
  saveToDo(toDoArray);
  makeToDoList(forToDoObject);
}

function makeToDoList(todo) {
  const li = document.createElement("li");
  li.id = todo.id;

  const button = document.createElement("input");
  button.type = `submit`;
  button.value = "❌";
  button.style.backgroundColor = `transparent`;
  button.style.border = `none`;
  const span = document.createElement("span");
  span.innerText = todo.value;
  button.addEventListener("click", deleteToDo);
  span.addEventListener("click", selectToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function selectToDo(event) {
  const span = event.target;
  span.classList.toggle("select");
}

toDoForm.addEventListener("submit", onToDoSubmit);

const toDoData = localStorage.getItem(TODOS_KEY);

if (toDoData != null) {
  const parseToDo = JSON.parse(toDoData);
  parseToDo.forEach(makeToDoList); //forEach를 이용하여 배열의 각각의 원소를 자동으로 인수로서 makeToDoList로 전송 및 반복 실행한다
  toDoArray = parseToDo; //기존 db에 있던 배열을 새로고침된 배열에 대입
}
