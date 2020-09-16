// REFACTOR :: js-clock 내 태그 변경 시 바뀌지 않도록 해야 함
const H1_CLOCK = 0;
const H3_CLOCK = 1;

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.children[H1_CLOCK];
const dateTitle = clockContainer.children[H3_CLOCK];

const dayConvertor = (dayOfWeek) => {
  let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return days[dayOfWeek];
}

const setDate = () => {
  const calendar = new Date();
  const year = calendar.getFullYear();
  const month = calendar.getMonth();
  const date = calendar.getDate();
  let dayOfWeek = calendar.getDay();

  dayOfWeek = dayConvertor(dayOfWeek);

  dateTitle.innerText = `${year}/${month < 10 ? `0${month}` : `${month}`}/${date < 10 ? `0${date}` : `${date}`} ${dayOfWeek}`;
}

const setClock = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}`;
}

function init() {
  setClock();
  setDate();
  // TODO :: 분마다 불러오기
  setInterval(setClock, 1000);
}

init();