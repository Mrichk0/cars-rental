const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const murkUp = ingredients.map((element) => {
  const newli = document.createElement("li");
  newli.textContent = element;
  newli.classList.add("item");

  return newli;
});

list.after(...murkUp);
