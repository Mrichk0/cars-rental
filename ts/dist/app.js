"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
console.log('wtf2');
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
let age;
let name1;
let toggle;
let empty;
let notInitialize;
let callback;
age = 50;
name1 = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => {
    return 100 + a;
};
let anything;
anything = -20;
anything = 'Text';
anything = {};
let some;
some = 'Text';
let str;
if (typeof some === 'string') {
    str = some;
}
let person;
person = ['Max', 21];
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
const page = {
    load: Load.LOADING
};
if (Load.LOADING === page.load) {
    console.log('Сторінка завантажується');
}
if (Load.READY === page.load) {
    console.log('Сторінка завантажина');
}
let union;
let literal;
function showMessage(massage) {
    console.log(massage);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
console.log();
//# sourceMappingURL=app.js.map