"use strict";
const body = document.querySelector("body");
const colorName = document.querySelector(".color");
const colorBtn = document.querySelector(".change-color");
colorBtn.addEventListener("click", () => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
    colorName.textContent = color;
});
//# sourceMappingURL=task9.js.map