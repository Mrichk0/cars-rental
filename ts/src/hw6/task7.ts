const rangeInput = document.getElementById("font-size-control")!;
const text = document.getElementById("text") as HTMLSpanElement;

rangeInput.addEventListener("input", onChangeSize);

function onChangeSize(e: any) {
  text.style.fontSize = `${e.target.value}px`;
}
