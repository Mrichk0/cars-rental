const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

btnStart.addEventListener('click', onBtnClick);
btnStop.addEventListener('click', onBtnClickStop);

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function onBtnClick() {
  intervalId = setInterval(changeColor, 1000);
  disabledAtrbut(btnStop, btnStart);
}

function onBtnClickStop() {
  clearInterval(intervalId);
  disabledAtrbut(btnStart, btnStop);
}

function disabledAtrbut(active, pasive) {
  active.disabled = false;
  pasive.disabled = true;
}
