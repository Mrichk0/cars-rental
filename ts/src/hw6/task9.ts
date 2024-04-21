// function getRandomHexColor(): any {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6)}`;
// }

const body = document.querySelector("body")!;
const colorName = document.querySelector(".color");
const colorBtn = document.querySelector(".change-color")!;

colorBtn.addEventListener("click", () => {
  const color: string = getRandomHexColor();
  (body as HTMLBodyElement).style.backgroundColor = color;

  (colorName as HTMLParagraphElement).textContent = color;
});
