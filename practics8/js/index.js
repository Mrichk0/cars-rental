const header = document.querySelector(".header");
const input = header.querySelector("#myInput");
const toDoBtn = header.querySelector(".addBtn");
const ulList = document.querySelector("#myUl");

const KEY_LOCAL_STORAGE = "to-do-list";

toDoBtn.addEventListener("click", addInfoFromInput);
ulList.addEventListener("click", onTargetClick);
ulList.addEventListener("click", onDeleteBtnClick);
window.addEventListener("keydown", (e) => {
  if (e.code !== "Enter") return;
  addInfoFromInput();
});

init();

function objDataCreate(text, statusbar = false) {
  return {
    text,
    id: Date.now(),
    statusbar,
  };
}

function addInfoFromInput() {
  const task = input.value.trim();
  if (!task) return;

  const dataTask = objDataCreate(task);
  addToLocalStorage(KEY_LOCAL_STORAGE, dataTask);
  input.value = "";
  addTolist(dataTask);
}

function addInfoFromInputOnEnterBtn(e) {
  // if (e.code !== 'E')

  console.log(e.code);
}

function init() {
  const storageArr = getFromLocalStorage(KEY_LOCAL_STORAGE);
  if (!storageArr) return;

  const liMarkUp = markUp(storageArr);
  addMarckUp(liMarkUp);
}

function markUp(arr) {
  return arr
    .map(
      ({ text, id, statusbar }) =>
        `<li class="${statusbar ? "checked" : ""}" data-id="${id}"  >${text}
            <button type="button">X</button>
        </li>`
    )
    .join("");
}

function addMarckUp(text) {
  ulList.insertAdjacentHTML("afterbegin", text);
}

// ___________________API____________
function addToLocalStorage(key, obj) {
  const data = getFromLocalStorage(key);
  let arr = [];
  if (data) {
    arr = [...data, obj];
  } else {
    arr.push(obj);
  }
  localStorage.setItem(key, JSON.stringify(arr));
}

function getFromLocalStorage(key) {
  const stringData = localStorage.getItem(key);
  if (stringData) {
    return JSON.parse(stringData);
  }
  return null;
}
//------------------------------------

function addTolist(obj) {
  const text = markUp([obj]);
  addMarckUp(text);
}

function onTargetClick(e) {
  if (e.target.nodeName !== "LI") {
    return;
  }
  e.target.classList.toggle("checked");
  const localArr = getFromLocalStorage(KEY_LOCAL_STORAGE);
  const idEl = e.target.dataset.id;

  const updataStutusBar = changeStatusBar(localArr, idEl);
  localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(updataStutusBar));
}

function changeStatusBar(arrey, idEl) {
  const arrCopy = [...arrey];
  arrCopy.forEach((element) => {
    if (element.id === Number(idEl)) {
      element.statusbar = !element.statusbar;
    }
  });

  return arrCopy;
}

function onDeleteBtnClick(e) {
  if (e.target.nodeName !== "BUTTON") return;

  const btnId = e.target.parentNode.dataset.id;
  const filterData = dataFilter(getFromLocalStorage(KEY_LOCAL_STORAGE), btnId);
  localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(filterData));
  e.target.parentNode.remove();
}

function dataFilter(arrey, btnId) {
  return arrey.filter((item) => item.id !== Number(btnId));
}
