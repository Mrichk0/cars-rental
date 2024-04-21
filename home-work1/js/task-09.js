function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const color = document.querySelector(".color");
const btn = document.querySelector(".change-color");

btn.addEventListener("click", onClickChangeColor);

function onClickChangeColor() {
  const rundom = getRandomHexColor();
  body.style.backgroundColor = rundom;
  color.textContent = rundom;
}
