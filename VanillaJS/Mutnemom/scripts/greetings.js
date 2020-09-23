const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greetings = document.querySelector(".js-greetings");

// Radiobutton 요소를 어떻게 가져오는지?
// Radiobutton 선택된 요소를 어떻게 알 수 있는지?
const radio = document.querySelector(".js-radio");
const kr = radio.querySelector("input");

let USER_NAME = "user";
let SHOWING = "showing";

const handleSubmit = (event) => {
  event.preventDefault();
  const currentValue = input.value;

  localStorage.setItem(USER_NAME, currentValue);
  showGreetings(currentValue);
}

const getUserName = () => {
  form.classList.add(SHOWING);
  radio.classList.add(SHOWING);
  form.addEventListener("submit", handleSubmit);
}

const showGreetings = (text) => {
  form.classList.remove(SHOWING);
  radio.classList.remove(SHOWING);
  greetings.classList.add(SHOWING);
  greetings.innerText = `Hello ${text}`;
}

const loadName = () => {
  const user_name = localStorage.getItem(USER_NAME);
  if(user_name === null) {
    // set user name
    getUserName();
  } else {
    // show user name
    showGreetings(user_name);
  }
}

function init() {
  loadName();
}

init();