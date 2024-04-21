"use strict";
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', (e) => {
    e.target.value === "" ? output.textContent = 'Anonymous' : output.textContent = e.target.value;
});
//# sourceMappingURL=task5.js.map