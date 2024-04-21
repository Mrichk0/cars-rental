// const decrementEl = document.querySelector('button[data-action="decrement"]');
// const incrementEl = document.querySelector('button[data-action="increment"]');
// let valueEl = document.querySelector("#value");

// const counter = {
//   value: 0,

//   increment() {
//     this.value += 1;
//   },

//   decrement() {
//     this.value -= 1;
//   },
// };

// incrementEl.addEventListener("click", () => {
//   counter.increment();
//   valueEl.textContent = counter.value;
// });

// decrementEl.addEventListener("click", () => {
//   counter.decrement();
//   valueEl.textContent = counter.value;
// });

const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
let valueEl = document.querySelector("#value");

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },

  decrement() {
    this.value -= 1;
  },
};

incrementEl.addEventListener("click", onInClick);
decrementEl.addEventListener("click", onDeClick);

function onInClick() {
  counter.increment();
  valueEl.textContent = counter.value;
}

function onDeClick() {
  counter.decrement();
  valueEl.textContent = counter.value;
}
