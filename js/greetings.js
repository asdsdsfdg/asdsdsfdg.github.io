const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greetings = document.querySelector("#greetings");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event) {
  //submit 이벤트가 발생했을 때 username을 저장하는 함수
  event.preventDefault();
  const username = loginInput.value;
  onGreetings(username);
  localStorage.setItem(USERNAME_KEY, username);
}

function onGreetings(userdata) {
  //userdata가 주어졌을 때 form을 지우고 인삿말 출력하는 함수
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greetings.classList.remove(HIDDEN_CLASSNAME);
  greetings.innerText = `Hi! ${userdata}`;
}

const savedlocalStorage = localStorage.getItem(USERNAME_KEY);

if (savedlocalStorage === null) {
  //기존 데이터 유무에 따라 submit을 받을지, 인삿말을 출력할지 결정하는 함수
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  onGreetings(savedlocalStorage);
}
