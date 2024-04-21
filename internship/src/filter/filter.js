let tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "Node.js" },
  { label: "React" },
  { label: "Vue" },
  { label: "Next.js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "GraphQl" },
  { label: "PostgreSQL" },
  { label: "MongoDB" },
];

const list = document.querySelector(".js-list");
const input = document.getElementById("filter");

function createMarkUp(arr) {
  const listItems = arr
    .map(({ label }) => {
      return `
    <li>${label}</li>
    `;
    })
    .join("");
  return listItems;
}

createMarkUp(tech);

input.addEventListener("input", onInputFilterList);

function onInputFilterList(e) {
  const filteredArr = tech.filter(({ label }) =>
    label.toLowerCase().includes(e.currentTarget.value.toLowerCase())
  );

  list.innerHTML = createMarkUp(filteredArr);
}
list.innerHTML = createMarkUp(tech);
