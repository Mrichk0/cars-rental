// const allCatecoris = document.querySelectorAll(".item");
// console.log(`all catecoris: ${allCatecoris.length}`);

// for (const element of allCatecoris) {
//   console.log(`categoris: ${element.querySelector("h2").textContent}`);
//   console.log(`elements: ${element.querySelectorAll("li").length}`);
// }

// const list = document.querySelector("#categories");
// const content = document.querySelector(".content");
// const fruits = ["cola", "pepsi", "beer", "woter"];

// list.addEventListener("click", onItemClick);

// function onItemClick(e) {
//   content.innerHTML = e.target.textContent;
// }

// list.innerHTML = markUp(fruits);
// function markUp(arr) {
//   return arr.map((item) => `<li>${item}</li>`).join("");
// }

// function XO(str) {
//   //code here
//   const obj = {
//     x: 0,
//     o: 0,
//   };
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === "x") {
//       obj.x += 1;
//     } else if (str[i] === "o") {
//       obj.o += 1;
//     }
//   }
//   return obj.x === obj.o ? true : false;
// }
// console.log(XO("dfvrrvr"));

// const num = "1222333444556667";

// function luckyNumber(number) {
//   const numberArr = [...number];

//   let obj = {};
//   for (let i = 0; i < numberArr.length; i += 1) {
//     if (!obj[numberArr[i]]) {
//       obj[numberArr[i]] = 1;
//     }
//     obj[numberArr[i]] += 1;
//   }
//   let result = 0;

//   for (const key in obj) {
//     if (obj[key] == key) {
//       result = Math.max(key);
//     }
//   }
//   return result;
// }

// console.log(luckyNumber(num));

// const inData =
//   "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue&experiments.theme=dark";

// function queryObj(str) {
//   let res = {};
//   let strArr = str.split("&");
//   return res;
// }

// function isUnique(str) {
// let obj = {};
// let arr = str.split("");
// for (let i = 0; i < arr.length; i++) {
//   if (obj[arr[i]]) {
//     obj[arr[i]] += 1;
//   } else {
//     obj[arr[i]] = 1;
//   }
// }
// for (let key in obj) {
//   if (obj[key] !== 1) {
//     return false;
//   } else {
//     return true;
//   }
// }
/////////////////////////////////////////////
// if (new Set(str).size === str.length) {
//   return true;
// }
// return false;

//   for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     if (str.lastIndexOf(element) !== i) {
//       console.log(str.lastIndexOf(element));
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isUnique("str"));

// function flatMap(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       const flat = flatMap(arr[i]);
//       for (let j = 0; j < flat.length; j++) {
//         newArr.push(flat[j]);
//       }
//     } else {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
//   // return arr.flat(Infinity);
// }

// console.log(flatMap([1, [2, [3], [4]]]));

// function uniqueString(str) {
//   str = str.split("");
//   const obj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (!obj.str[i]) {
//       obj[str[i]] = 1;
//     } else {
//       obj[str[i]] += 1;
//     }
//   }
//   return obj;
// }

// console.log(uniqueString("ssstriing"));

// function oddOrEven(array) {
//   // let result = 0;
//   // for (let i = 0; i < array.length; i += 1) {
//   //   result += array[i];
//   // }
//   // if (!result % 2) {
//   //   return "even";
//   // } else {
//   //   return "odd";
//   // }

//   return array.reduce((sum, item) => sum + item, 0) % 2 ? "odd" : "odd";
// }

// console.log(oddOrEven([]));

// function unique(str) {
//   // const set = new Set(str);
//   // if (set.size !== str.length) {
//   //   return false;
//   // }
//   // return true;
//   // for (let i = 0; i < str.length; i++) {
//   //   if (str.lastIndexOf(str[i]) !== i) {
//   //     return false;
//   //   }
//   // }
//   // return true;

//   return Array.from(new Set(str)).join("");
// }

// console.log(unique("strteweeeeee"));

// const moreOfenMeet = (array) => {
//   const obj = {};
//   let acum = 0;
//   let result = array[0];

//   for (let i = 0; i < array.length; i++) {
//     if (obj[array[i]]) {
//       obj[array[i]] += 1;
//     } else {
//       obj[array[i]] = 1;
//     }

//     if (obj[array[i]] > acum) {
//       acum = obj[array[i]];
//       result = array[i];
//     }
//   }

//   return result;
// };

// console.log(
//   moreOfenMeet(["a", "b", "c", "d", "d", "d", "d", "e", "a", "b", "a"])
// );

// function digitalRoot(n) {
//   const arr = String(n).split("");
//   let result = 0;

//   for (let i = 0; i < arr.length; i += 1) {
//     result += Number(arr[i]);
//   }
//   return result;
// }

// console.log(digitalRoot(177));

// function example() {
//   const arr = ["Kate", "bober"];

//   return {
//     print: () => console.log(arr),
//     add: (name) => {
//       arr.push(name);
//     },
//   };
// }

// const massage = example();

// massage.add("Katya");
// massage.print();

// const arr = [1, 2, 3, 5, 8, 13];

// for (var i = 0; i < arr.length; i++) {
//   ((j) => {
//     setTimeout(() => {
//       console.log(arr[j]);
//     }, 1500);
//   })(i);
// }

// for (let i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     console.log(arr[i]);
//   }, 1500);
// }

// const person = {
//   name1: "Beach",
//   add: function (what, name) {
//     console.log(`${what} HTO ${name} TVIY ${this.name1} `);
//   },
// };

// const dido = {
//   name1: "Sraca",
// };

// person.add("say", "who");
// person.add.call(dido, "djmill", "lox");

// function findArr(arr, arr2) {
//   if (arr.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr.length; i += 1) {
//     const index = arr.indexOf(arr2[i]);
//     if (index === -1) {
//       return false;
//     }
//     delete arr[index];
//   }
//   return true;
// }

// console.log(findArr([1, 2, 3], [1, 2, 3]));
// console.log(findArr([1, 2, 3], [1, 2, 4]));
// console.log(findArr([1, 2, 3], [1, 2, 3, 3]));

// function anagrama(arr) {
//   const newArr = arr.map((item) => item.split("").sort().join(""));

//   for (let i = 1; i < newArr.length; i += 1) {
//     if (newArr[i] !== newArr[0]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(anagrama(["abcd", "acbd", "cbda"]));
// console.log(anagrama(["abcd", "acbd", "cbdo"]));

// console.log("...preLouding");

// setTimeout(() => {
//   console.log("...requst data");
//   const backendData = {
//     name: "lox",
//     age: "22",
//     legs: "2",
//   };

//   setTimeout(() => {
//     backendData.hends = 2;
//     console.log("result", backendData);
//   }, 5000);
// }, 5000);

// const daley = (ms) => {
//   return new Promise((r) => setTimeout(() => r(), ms));
// };
// const url = `https://jsonplaceholder.typicode.om/todos`;

// function toDo() {
//   return daley(2000)
//     .then(() => fetch(url))
//     .then((response) => response.json());
// }

// toDo()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => console.error(e));

// async function toDoAsync() {
//   try {
//     await daley(2000);
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (e) {
//     console.error(e);
//   }
// }

// toDoAsync();

// const person = new Object({
//   name: "maxim",
//   age: 22,
//   greed: function () {
//     console.log("Greed");
//   },
// });

// Object.prototype.seyHello = () => {
//   console.log("hello");
// };
// const lena = Object.create(person);
// console.log(lena);
// const str = new String("im digpig");
// console.log(str);

// function hello() {
//   console.log("sey hello", this);
// }

// const person = {
//   name: "alex",
//   age: 20,
//   seHyello: hello,
//   logInfo: function (phone) {
//     console.group(`${this.name} info:`);
//     console.log(`hello ${this.name}`);
//     console.log(phone);
//     console.groupEnd();
//   },
// };

// const lena = {
//   name: "lena",
//   age: 25,
// };

// person.logInfo.bind(lena, "063925")();

// const array = [1, 2, 3, 4, 5];

// Array.prototype.maunBy = function (n) {
//   return this.map((i) => i * n);
// };

// console.log(array.maunBy(7));

// function count(string) {
//   let obj = {};
//   for (let i = 0; i < string.length; i += 1) {
//     if (obj[string[i]]) {
//       obj[string[i]] += 1;
//     } else {
//       obj[string[i]] = 1;
//     }
//   }
//   return obj;
// }

// function count(string) {
//   const obj = {};
//   string.split("").forEach((i) => (obj[i] ? (obj[i] += 1) : (obj[i] = 1)));
//   return obj;
// }

// console.log(count("aba"));

// function toCamelCase(str) {
// let newArr;
// if (str.includes("-")) {
//   newArr = str.split("-");
// } else {
//   newArr = str.split("_");
// }
// return newArr.map((e) => e[0].toUpperCase() + e.slice(1)).join("");

//   const newArr = str.split("");

//   return newArr
//     .map((el, i) => {
//       if (el === "-" || el === "_") {
//         el = newArr[i + 1].toUpperCase();
//         newArr.splice(i + 1, 1);
//       }
//       return el;
//     })
//     .join("");
// }

// console.log(toCamelCase("rap-rock-pop"));
// console.log(toCamelCase("dizzel_patrol_gaz"));

// function fn1(n) {
//   return function fn2(nam) {
//     return nam + n;
//   };
// }

// const addOne = fn1(1);
// function bind(context, fn) {
//   return function (...args) {
//     fn.apply(context, args);
//   };
// }

// function logPerson() {
//   console.log(`person:${this.name}, ${this.age}, ${this.job}`);
// }

// const person1 = { name: "vasya", age: 22, job: "smm" };

// bind(person1, logPerson);

// function firstNonRepeatingLetter(s) {
//   const obj = {};
//   for (let i = 0; i < s.length; i++) {
//     if (obj[s[i]]) {
//       obj[s[i]] = obj[s[i]] += 1;
//     } else {
//       obj[s[i]] = obj[s[i]] = 1;
//     }
//   }
//   const arr = Object.entries(obj).filter((i) => i.includes(1));
//   if (arr.length < 1) {
//     return "";
//   } else {
//     return arr[0][0];
//   }
// }

// function findUniq(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[0] !== arr[1] && arr[0] !== arr[2]) {
//       return arr[0];
//     } else if (arr[i] !== arr[i + 1]) {
//       return arr[i + 1];
//     }
//   }
// }
// console.log(findUniq([0, 1, 0]));

function orderWeight(string) {
  const arr = [];
  const newArr = string.split(" ");
  for (let i = 0; i < newArr.length; i++) {
   for()
  }
}

console.log(orderWeight("56 65 74 100 99 68 86 180 90"));
