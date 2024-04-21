//-----------1---------
// const arr = [[1], [[2]], [[[3]]], 4];

// const flatArr = (array) => {
//   const newArr = [];

//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       const flat = flatArr(array[i]);
//       for (let j = 0; j < flat.length; j++) {
//         newArr.push(flat[j]);
//       }
//     } else {
//       newArr.push(array[i]);
//     }
//   }

//   return newArr;
// };

// console.log(flatArr(arr));
//-------------2------------
// const string = "ab";

// const unicString = (string) => new Set(string).size === string.length;

// console.log(unicString(string));
//-----------------3------------

// const string = "abaadrgb";

// const unicString = (string) => Array.from(new Set(string)).join("");

// console.log(unicString(string));
// ----------------------4-------------------

// const arr = ["a", "b", "c", "c"];

// const findFrequentString = (array) => {
//   const obj = {};
//   let maxValue = 0;
//   let frequentString;
//   for (let i = 0; i < array.length; i += 1) {
//     const current = array[i];
//     if (obj[current]) {
//       obj[array[i]] += 1;
//     } else {
//       obj[array[i]] = 1;
//     }
//     console.log(current);

//     if (obj[current] > maxValue) {
//       maxValue = obj[current];
//       frequentString = current;
//     }
//   }
//   return frequentString;
// };

// console.log(findFrequentString(arr));
// ----------------5--------------
// const string = "abcdef";

// const addSymbols = (string) =>
//   string
//     .toUpperCase()
//     .split("")
//     .map((el, i) => `${el}${el.repeat(i).toLowerCase()}`)
//     .join("-");

// console.log(addSymbols(string));

// function Calculator() {
//   this.read = function () {
//     this.a = prompt("a", 0);
//     this.b = prompt("b", 0);
//     console.log(this.a);
//   };

//   this.sum = function () {
//     return +this.a + +this.b;
//   };
// }

// const calculator = new Calculator();

// calculator.read();
// alert(calculator.sum());

// const findIndex = (string) =>
//   string.split("").reduce((res, item, index) => {
//     if (item === item.toUpperCase()) {
//       res.push(index);
//     }
//     return res;
//   }, []);

// console.log(findIndex(string));

// const string = "justForTest";

// const sameString = (string, repitString) => {};
// console.log(sameString(string));
//-------------------------------------------
// const getNumber = (n) => {
//   const arr = [];

//   for (let i = 1; i <= n; i += 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arr.push("foobar");
//       console.log("foobar");
//     } else if (i % 3 === 0) {
//       arr.push("foo");
//       console.log("foo");
//     } else if (i % 5 === 0) {
//       arr.push("foobar");
//       console.log("bar");
//     } else {
//       arr.push(i);
//       console.log(i);
//     }
//   }
//   return arr;
// };

// console.log(getNumber(15));
//---------------------------------------------------------------------------
// const unicItem = (...arr1) => [...new Set(arr1.flatMap((item) => item))];

// console.log(unicItem([1, 2, 3], [4, 1, 3], [5]));
//--------------------------------------------------------
// const palindrome = (string) => {
//   string = string.toLowerCase();

//   return string === string.split("").reverse().join("");
// };

// console.log(palindrome("acdfdfba"));

// const anagram = (...str) => {
//   const newString = str.map((string) =>
//     string.toLowerCase().split("").sort().join("")
//   );

//   return newString[0] === newString[1];
// };

// console.log(anagram("test", "Test"));
//---------------------
// let result = 0;
// const id = () => result++;

// console.log(id());
// console.log(id());
//
// const getId = () => {
//   let number = 0;
//   return function () {
//     return number++;
//   };
// };

// const id = getId();

// console.log(getId());
// console.log(id());
// console.log(id());
// console.log(id());

// const number = 123456789;

// const telNumber = (numb) => {
//   const newStr = numb.toString();
//   return `(${newStr.slice(0, 3)}) ${newStr.slice(3, 6)}-${newStr.slice(6, 9)} `;
// };

// console.log(telNumber(number));

// const fibanachi = (num) => {
//   if (num < 2) {
//     return num;
//   }
//   return fibanachi(num - 1) + fibanachi(num - 2);
// };

// let arr = [5, 0, -5, 20, 88, 17, -32];

// arr = [10, 15, 3, 7];

// const sumNumb = (array) =>
//   array.reduce((acc, item) => (item % 2 && 0 < item ? acc + item : acc), 0);

// console.log(arr);

// const retTru = (array, num) => {
//   for (let index = 0; index < array.length; index++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[index] + array[j] === num) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// console.log(retTru(arr, 17)

// const sum = (num) =>
//   num
//     .toString()
//     .split("")
//     .reduce((acc, i) => acc + +i, 0);

// console.log(sum(1));

// const arr = [8, 6, 2, 10];

// const sortArr = (arr) => {
//   // const newArr = [];
//   // newArr.push(Math.min(...arr));
//   if (arr.length === 0) {
//     return;
//   }

//   return arr.splice(arr.indexOf(Math.max(...arr)), 1);
//   return sortArr(arr);
// };

// console.log(sortArr(arr));

// const str1 = "abaj of loab";

// const shortestWord = (str) =>
//   str.split(" ").sort((a, b) => a.length - b.length)[0];

// const shortestWord2 = (str) => {
//   const arr = str.split(" ");
//   let res = arr[0];

//   for (const word of arr) {
//     if (res.length > word.length) {
//       res = word;
//     }
//   }
//   return res;
// };

// console.log(shortestWord2(str1));

// const name = "mobok bomok";

// const initial = (str) =>
//   str
//     .toUpperCase()
//     .split(" ")
//     .map((item) => item[0] + ".")
//     .join("");

// console.log(initial(name));

// const number = -32;

// const sum = (num) =>
//   Math.abs(num)
//     .toString()
//     .split("")
//     .reduce((acc, i) => acc + +i, 0);

// console.log(sum(number));

// const arr = [2, 3, 6, 8, 5];

// const minAndMax = (arr) => arr.sort()[(0, arr.length - 1)];

// console.log(minAndMax(arr));

// const string = "abcde";

// const englishDom = (str) => {
//   return str
//     .toUpperCase()
//     .split("")
//     .map((l, index) => `${l}${l.toLowerCase().repeat(index)}`)
//     .join("-");
// };

// console.log(englishDom(string));

// const string = "aBcdHe";

// const add = (str) => {
//   const arr = [];
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === str[i].toUpperCase()) {
//       arr.push(i);
//     }
//   }
//   return arr;
// };

// const add = (str) =>
//   str.split("").reduce((acc, item, index) => {
//     if (item === item.toUpperCase()) {
//       acc.push(index);
//     }
//     return acc;
//   }, []);

// console.log(add(string));

// const add = (...args) => [...new Set(args.flat())];
// console.log(add([22, 11], [33, 22], [55, 33]));

// const pair = (str) => {
//   const obj = {};
//   for (let i = 0; i < str.length; i++) {
//     obj[str[i]] += 1;
//   }
//   return obj;
// };

// console.log(pair("(((()))"));

// const pair = (numb) => {
//   const obj = {};
//   const str = numb.toString();
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       obj[str[i]]++;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }

//   let res = 0;

//   for (let key in obj) {
//     if (obj[key] == key) {
//       res = key;
//     }
//   }
//   return res;
// };

// console.log(pair(112223334444));
