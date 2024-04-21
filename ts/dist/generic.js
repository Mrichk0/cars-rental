"use strict";
const promise = new Promise((res) => {
    setInterval(() => {
        res("done");
    }, 1000);
});
promise.then((data) => {
    console.log(data);
});
function marge(objA, objB) {
    return Object.assign({}, objA, objB);
}
//# sourceMappingURL=generic.js.map