"use strict";
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const value = document.querySelector('#value');
const counter = {
    result: 0,
    increment() {
        this.result += 1;
    },
    decrement() {
        this.result -= 1;
    }
};
incrementBtn.addEventListener('click', () => {
    counter.increment();
    value.textContent = counter.result.toString();
});
decrementBtn.addEventListener('click', () => {
    counter.decrement();
    value.textContent = counter.result.toString();
});
//# sourceMappingURL=task4.js.map