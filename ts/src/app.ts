// ------------------ 1 lesson ------------
const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}
console.log('wtf2')

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
}); 
// --------------------- 2 lesson --------------
                    // 1
let age: number;
let name1: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback: (a: number) => number;

age = 50;
name1 = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => {
  return 100 + a;
};
                //  2

let anything: any

 anything = -20;
anything = 'Text';
anything = {};

            //   
let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

               
let person: [string, number];
 person = ['Max', 21];
                
enum Load { LOADING, READY }

const page = {
    load: Load.LOADING
}

if (Load.LOADING === page.load) {
    console.log('Сторінка завантажується')
}

if (Load.READY === page.load) {
    console.log('Сторінка завантажина')
}

let union: string | number

let literal: 'enable' | 'disable';

function showMessage(massage: string): void{
    console.log(massage)
}

function calc(num1:number, num2:number):number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

type page1 = {
  title: string,
  likes: number,
  accounts: string[],
  status: 'open' | 'close',
  details?: {
    createAt: Date,
    updateAt: Date,
  }
}

console.log()





