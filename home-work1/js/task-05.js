const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputValue);

function onInputValue(event) {
  const inputValue = event.currentTarget.value;
  if (inputValue) {
    outputEl.textContent = inputValue;
  } else {
    outputEl.textContent = "Anonymous";
  }
}
