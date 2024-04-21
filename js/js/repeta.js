//.написати змінні для працівників
//для макс і мін
// зробити   рандо для зп
// порахувати спільну суму


// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// // for (let i = 0; i < numbers.length; i += 1){
// //     console.log(i)
// //}
// for (const number of numbers) {
//     if (number % 2 !== 0) {
// //      console.log( number)
//         continue}
    
//     total += number; 
//     console.log( number)
// }
// console.log(total );
//-----------------true folse
//
//----------------3-------------
  
// const arrays = [5, 10, 15, 20];
// const arraos = [10, 20, 30];
// let c = 0;
// const a = arrays.concat(arraos)
// for (const b of a)
//     c += b
// console.log(c)

//  const findLogin = function(login, logins) {  
//      return login.includes(logins) ? `ok ${logins}` : `ne ok ${logins}`; 
// }
//  const allLogins = ['gogogogogo', 'rap', 'poppopo', 'hope']
// console.log(findLogin(allLogins, 'rap'))

// const reName = function (string){
// const letters = string.split('')
// let ivertedString = '';

// for (const letter of letters) {

//     ivertedString += letter === letter.toLowerCase()
//         ? letter.toUpperCase()
//         : letter.toLowerCase();
// }
//     return string
//     }
// const reName = function( tatile){
//  tatile = 'top 10 benefits of React framework';
// const a = tatile.toLowerCase().split(' ').join("-");
// return tatile}


    // for (let friend of allFriends) {
    //     if (friend.name === call) {
    //  return `є ${call}`
    //     }
    // }
    // return 'нема'

// const friends = [
//     { name: 'mango', online: false },
//     { name: 'kiwi', online: true },
//     { name: 'poly', online: true },
//     { name: 'ajax', online: false },   
// ]

// const findFriendByName = function (allFriend) {

//     const hear = [];
//     const 
//     for (const friend of allFriend) {
//         if (friend.online ) {
//             hear.push(friend )
//         }

    
     
//     }
//     return hear;
// }
// console.log(findFriendByName(friends, 'kiwi'))
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line

// const keys = Object.keys(apartment);
// for( let key of keys){
//     values.push(key);
//     console.log(values)
// }
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for( const key in object){
//     if (object.hasOwnProperty(key)){
//         propCount += 1;
      
//     }

//   }
//   // Change code above this line
   
//   return propCount;
// }

// const selor = {
//     worker1: 300,
//     worker2: 400,
//     worker3: 500,
// }

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

// const values = Object.values(salaries);
// for(let salari of salaries){
//   console.log(salari)
// }
//   //
//     return totalSalary;
     
// }
// console.log(countTotalSalary(selor))

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// //  console.log( colors)
// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors){
//     hexColors.push(color[hex]);
//     rgbColors.push(color.rgb);
//     console.log( hexColors)
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//     for (const product of products) {
//         console.log(product)
//     if (productName === product.name) {
//         return product.price;  
//     }
//         return null
//   // Change code above this line
// }}
//  console.log(getProductPrice("Radar"))
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// console.log(products)
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;
// for( const product of products){
// if(product.productName){
//   totalPrice = product.price * product.quantity
// }

// }


// return  totalPrice
//   // Change code above this line
// }

// getAllPropValues("Radar");
// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result.toFixed(2))
// }


// doMath(350, 200, function (x, y) {
//   return x + y;
// })
// doMath(1778, 1509, function (x, y) {
//   return x / y
// })


// function coll() {
//   console.log('after 2 second')
// }
// console.log('before timeout')
 
// setTimeout(coll, 20000)
// console.log( 'after timeout')
//----------------------------------
// const filter = function (array, test) { 
//   const filtredArray = []

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el)
//     if (passed) {
//       filtredArray.push(el)
//     }
//   }
//   return filtredArray;
// };

// const callBack1 = function (value) {
//   return value >= 3;
// }
// const callForvard = function (value) {
//   return value <= 3;
// }

// filter([1, 2, 3, 4, 5, 6], callBack1);
// filter([1, 2, 3, 4, 5, 6, 8,], callForvard);

// const FnA = function (parametr) {
//   const pop = 'first level';

//   const ThisIs = function () {
    
//   }
//   return ThisIs;
// }

// const FnB = FnA(555)
// FnB

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
    
//   }
//   return makeDish;
// };

// const mango = makeSheff('mango'); 

// function addOverNum(bigest, ...args) {
//   let total = 0;

//   for (const arg of args) {
//      if (bigest > arg){
//     total += arg;
//     // }
//     //   }

    
//     // Change code above this line
//   }
//   return total;
//   console.log(args)
// }

// console.log(addOverNum( 10, 13, 8, 11, 8, 17))

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//     let a =  Object.keys(potions),
// console.log( a)
// }
  // Change} code below this line


// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

// const rounder = function (number, places) {
//   return Number(number.toFixed(places))
// }

// const rounder = function (places) {
//   return function (number) {
//     return Number (number.toFixed(places))
//   }
// }

// const rounder2 = rounder(2);

// console.log(rounder2(4.55555));

// const add = function (a, b, c) {
//   return a + b + c
// }

// const add1 = (a, b, c) => { return a + b + c };

// const add2 = (a, b, c) => a + b + c;

// console.log(add)

// const changeEven = (numbers, value) => {
//   // Change code below this line
//   const newArry = []
//   // for (let i = 0; i < numbers.length; i += 1)
//   numbers.forEach(number => {
//  if (number % 2 === 0) {
//     number += value;
//    console.log(number)
//  }

//   })

//   return newArry;
// }

// console.log(changeEven([1 , 2, 3, 4, 5], 10))

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// // Change code below this line
// const planetsLengths = planets.map((
//   planet
// ) => { });
// console.log(planet)
 
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);

// console.log(allGenres)

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArrey = [];
//   numbers.forEach(number => {
//     if(number % 2 === 0){
//      newArrey.push(number +=  value)
//     }
//     else{
//       newArrey.push(number)
//     }
//   })
//   return newArrey
  // Change code above this line
// }
//------------------------------------------------------------------
// class Storage{
//    constructor (items){
//       this.items = items;
//     }
//     getItems(){
//         return this.items;
//     }
//     addItem(newItem){
//         this.items.push(newItem);
//     }
//      removeItem(itemToRemove){
//     this.items = this.items.filter(item => item !== itemToRemove);

//      }    
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// const storage2 = new Storage(["fefw", "fewef", "fwefwe"]);


// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// console.log(storage2.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]




https://github.com/mrok-creator/goit-js-hw-06