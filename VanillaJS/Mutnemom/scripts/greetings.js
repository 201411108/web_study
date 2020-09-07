const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greetings = document.querySelector(".js-greetings");

let USER_NAME = "user";
let SHOWING = "showing";

const showGreetings = (text) => {
  form.classList.remove(SHOWING);
  greetings.classList.add(SHOWING);
  greetings.innerText = `Hello ${text}`;
}

const handleSubmit = (event) => {
  event.preventDefault();
  const currentValue = input.value;
  
  localStorage.setItem(USER_NAME, currentValue);
  showGreetings(currentValue);
}

const getUserName = () => {
  form.classList.add(SHOWING);
  form.addEventListener("submit", handleSubmit);
}

function init() {
  const user_name = localStorage.getItem(USER_NAME);
  if(user_name === null) {
    // set user name
    getUserName();
  } else {
    // show user name
    showGreetings(user_name);
  }
}

init();