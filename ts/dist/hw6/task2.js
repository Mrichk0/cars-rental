"use strict";
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];
const arr = document.querySelector('#ingredients');
let i = ingredients.map(i => {
    let element = document.createElement('li');
    element.textContent = i;
    element.classList.add('item');
    return element;
});
arr.append(...i);
//# sourceMappingURL=task2.js.map