// силочні типи функцій
// const addBtn = document.querySelector(".add");
// const deleteBtn = document.querySelector(".delete");
// const currentBtn = document.querySelector(".current");

// addBtn.addEventListener("click", () => {
//   currentBtn.addEventListener("click", onTargetBtn);
// });

// deleteBtn.addEventListener("click", () => {
//   currentBtn.removeEventListener("click", onTargetBtn);
// });

// function onTargetBtn() {
//   console.log("onCurrentClick");
// }

// window.addEventListener("keypress", onKeypress);

// function onKeypress(e) {
//   console.log("значення ", e.key);
//   console.log("код", e.code);
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const input = document.querySelector("input");
// const boxes = document.getElementById("boxes");
// const createBtn = document.querySelector("[data-create]");
// const deleteBtn = document.querySelector("[data-destroy]");

// createBtn.addEventListener("click", () => {
//   let sizeBox = 20;
//   for (let i = 0; i < input.value; i++) {
//     boxes.insertAdjacentHTML(
//       "beforeend",
//       `<div style="background-color:${getRandomHexColor()};width:${sizeBox}px; height:${sizeBox}px"></div>`
//     );
//     sizeBox += 10;
//   }
//   input.value = "";
// });

// deleteBtn.addEventListener("click", () => {
//   boxes.innerHTML = "";
// });

// const openBtn = document.querySelector("[data-action='open-modal']");
// const closeBtn = document.querySelector("[data-action='close-modal']");
// const backdrop = document.querySelector(".backdrop");

// openBtn.addEventListener("click", onClickOpenModal);

// closeBtn.addEventListener("click", onClickCloseModal);

// backdrop.addEventListener("click", onClickOnBackdropCloseModal);

// function onClickOnBackdropCloseModal(e) {
//   if (e.target === e.currentTarget) {
//     onClickCloseModal();
//   }
// }

// function onClickOpenModal() {
//   window.addEventListener("keydown", onKeydownCloseModal);
//   document.body.classList.add("show-modal");
// }

// function onClickCloseModal() {
//   document.body.classList.remove("show-modal");
//   window.removeEventListener("keydown", onKeydownCloseModal);
// }

// function onKeydownCloseModal(e) {
//   console.log(e.code);
//   if (e.code === "Escape") {
//     onClickCloseModal();
//   }
// }

//=======================================

const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

const selectedTegs = new Set();

function selectColor(e) {
  //   if (e.target.nodeCode !== "Button") {
  //     return;
  //   }

  const color = e.target.dataset.color;
  output.textContent = `Selected color: -${color}`;
  output.style.color = color;
  selectedTegs.add(color);
  console.log(selectedTegs);
}

createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}
