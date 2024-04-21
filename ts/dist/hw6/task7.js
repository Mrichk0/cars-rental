"use strict";
const rangeInput = document.getElementById("font-size-control");
const text = document.getElementById("text");
rangeInput.addEventListener("input", onChangeSize);
function onChangeSize(e) {
    text.style.fontSize = `${e.target.value}px`;
}
//# sourceMappingURL=task7.js.map