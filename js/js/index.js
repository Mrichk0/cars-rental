// Завдання. Попросіть користувача ввести 3 імені та прізвища, наприклад, студентів.
// Виведіть введені дані методом console.log
// у вигляді абзаців та нумерованого списку.


// Завдання. Потрібно попросити користувача замислити число. Потім він повинен помножити це число на 2 і додати отриманого результату 7.
// Те, що сталося в результаті, потрібно ввести в діалоговому вікні prompt().
// Ви повинні видати користувачеві, скільки він задумав.

// \n - для перенеск


//----РАНДОМНА ЗП ДЛЯ ПРАЦИВНІКА---

// let employees = 20;
// const max = 500;
// const min = 5000;
// let totalSalory = 0;


// for (let i = 1; i < employees; i += 1) {
//     const result = Math.round(Math.random() * (max - min) + min);
   
//     totalSalory += result;
// console.log( `${i}. зп ${result}`)
// }

// console.log('totalSalory:', totalSalory )

//  ---СУМА ПАРНИХ ЧИСЕЛ---
// const min = 4;
// const max = 30;
// let total = 0;
// for (let i = min; i < max; i += 1){
//     if (i % 2 !== 0) {
//   continue
//         }
//     total += i;  
//     console.log(i)
// console.log(`сума ${total}`)
//--------------------------------------------
//         
// let balance = 1000;
// const payment = 200; 
// console.log(`загальна сума замовлення ${payment} гривень`);
// if(balance > payment){
//     console.log(`на рахунку залишилось ${balance}грн`);
//     balance -= payment;
// }
//     else {
//     consol.log(`нема грн дебіл`);
//     }
// console.log('все ок ');
///*********ДИАПАЗОН ЦІН І СКИДКА */
// const totalSpend = 7000;
// let payment = 6000;
// let discount = 0;
// if (totalSpend >= 100 && totalSpend < 1000) {
//     discount = 0.01;
//     console.log('скидка 2%')
// }
// else if (totalSpend >= 1000 && totalSpend < 5000) {
//     discount = 0.05;
//     console.log('скидка 5%')
// }
// else if (5000 <= totalSpend ) {
//     discount = 0.1;
//      console.log('скидка 10%')    
// }
// else {
//     console.log(`скидка 0 lox`)
// }
// payment -= payment * discount;
// console.log(`оформляємо суму ${ payment}грн зі скидкою ${discount * 100}%`)

//________ЗАПИТИТИ В САШІ
//***************************** */
// const totalSpend = 7000;
// let payment = 1000;
// let discount = 0;
// if (100 > totalSpend < 1000) {
//     discount = 0.02 * payment;
//     payment -= discount;
// }
// else if (1000 >= totalSpend < 5000) {
//     discount = 0.05 * payment;
//     payment -= discount;
// }
// else if (5000 >= totalSpend < 10000) {
//     discount = 0.1 * payment;
//     payment -= discount;
    
// }
// console.log(`оформляємо суму ${ payment}грн зі скидкою ${discount}грн`)
///************************************************** */

//  const cart = [54, 28, 105, 70, 92, 17, 120];
// let a = 0;
// for (let i = 0; i <  cart.length ; i += 1){
//    a +=  cart[i]
// }
// console.log(a)
// let a = 0;
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let a = 0;
// for (const cartOne of cart) {
// a += cartOne;  
// }
//  console.log(cartOne);
  //const logins = ['m4ngoDoge', 'k1whhjf3jh', 'egogogo', 'hgastor'];
// const loginsToFind = 'megogogo';
// let message = `не знайдений ${loginsToFind}`;
//   for (let login of logins) {
//     if (loginsToFind !== login) {
//         continue
//       }   
//       message = `знайдений ${loginsToFind}`;
// }
//  console.log(message)
// ----------1------------
// let message =  `не знайдений ${loginsToFind}` ;
// for (let i = 0; i <= logins.length; i += 1){ 
//     let login = logins[i]
//     if (loginsToFind === login) {
//         message = `знайдений ${loginsToFind}` 
//     break    
//     }
// }

// ----------2------------
// const cut = logins.includes('megogogo') ? `знайдений ${loginsToFind}` : `не знайдений ${loginsToFind}`;
// console.log(cut)


/// -------------min number в масиві 
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let minNumber = numbers[0];

// for (const number of  numbers){
//     if (minNumber > number ) {
//         minNumber = number;
//   }
// }
// console.log(minNumber)
//------------***** замінити регістр
// const string = 'JavaSCRIPT';
// const letters = string.split('')
// let ivertedString = '';

// for (const letter of letters) {

//     ivertedString += letter === letter.toLowerCase()
//         ? letter.toUpperCase()
//         : letter.toLowerCase();
// }
//   console.log(ivertedString)
//------------------------------------
//шукає спільні цифри і додає в один масив
// const filterNumbers = function (array, ...args) {
    
//     const resalt = [];

//     for (let element of array) {
//         if (args.includes(element)) {
//     resalt.push(element)
// }
//     }  
//     return resalt
// }
//  console.log(filterNumbers([1, 2, 3], 2, 3));
