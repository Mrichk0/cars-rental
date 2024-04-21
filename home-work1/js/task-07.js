const inputEl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputEl.addEventListener("input", onRangeValue);
function onRangeValue(e) {
  const inputValue = e.currentTarget.value;
  text.style.fontSize = `${inputValue}px`;
}
