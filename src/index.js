import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerId = null;

// кнопки 
const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
}

// формула для рандомизации индекса
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// кнопки
refs.btnStart.addEventListener('click', changeBgColor);
refs.btnStop.addEventListener('click', stopChangeBgColor);

// Функция запускающая замену цвета
function changeBgColor() {
  refs.btnStart.setAttribute('disabled', 'true');
  timerId = setInterval(() => {
    colors.map(() =>
      refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0,5)]
    )
  }, 1000);
}
 
// Функция останавливающая замену цвета
function stopChangeBgColor(e) {
  refs.btnStart.removeAttribute('disabled');
  clearInterval(timerId);
}