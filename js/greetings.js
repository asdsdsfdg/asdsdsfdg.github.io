const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greetings = document.querySelector("#greetings");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  onGreetings(username);
  localStorage.setItem(USERNAME_KEY, username);
}

function onGreetings(userdata) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greetings.classList.remove(HIDDEN_CLASSNAME);
  greetings.innerText = `Hi! ${userdata}`;
}

const savedlocalStorage = localStorage.getItem(USERNAME_KEY);

if (savedlocalStorage === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  onGreetings(savedlocalStorage);
}
