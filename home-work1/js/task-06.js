const inputEl = document.querySelector("#validation-input");
const numberOfInput = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", onInputValue);

function onInputValue(e) {
  e.currentTarget.value.length === numberOfInput
    ? inputEl.classList.replace("invalid", "valid")
    : inputEl.classList.add("invalid");
}
