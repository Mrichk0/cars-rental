// let arr1: Array<string | number> = [];
// ===============================

const promise = new Promise((res) => {
  setInterval(() => {
    res("done");
  }, 1000);
});

promise.then((data) => {
  console.log(data);
});

function marge(objA: object, objB: object) {
  return Object.assign({}, objA, objB);
}
