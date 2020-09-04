const clockContainer = document.querySelector(".js-time");
const clockTitle = document.querySelector("h1");

const setClock = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}`;
}

function init() {
  setClock();
  // TODO :: 분마다 불러오기
  setInterval(setClock, 1000);
}

init();