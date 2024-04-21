"use strict";
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6)}`;
}
const controls = document.querySelector("#controls");
const boxes = document.getElementById("boxes");
console.log(controls);
const color = getRandomHexColor();
const box = `<div style="background-color:${color};width:20px;"></div>`;
console.log(box);
color.insertAdjacentHTML("beforeend", "<h2>Popular technologies</h2>");
//# sourceMappingURL=task10.js.map