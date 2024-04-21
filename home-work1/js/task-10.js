// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const input = document.querySelector('input[type="number"]');
// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy");
// const boxes = document.querySelector("#boxes");

// console.log(input.value);

// createBtn.addEventListener("click", onClickCreateSquer);
// destroyBtn.addEventListener("click", onClickDelete);

// function createMarkUp() {
//   let side = 30;
//   let markUp = "";
//   for (let i = 1; i <= input.value; i += 1) {
//     markUp += `<div style="width: ${side}px; height: ${side}px; background-color: ${getRandomHexColor()}"> </div>`;
//     side += 10;
//   }

//   return markUp;
// }

// function onClickDelete() {
//   boxes.innerHTML = "";
//   input.value = "";
// }

// function onClickCreateSquer() {
//   boxes.innerHTML = createMarkUp();
// }
