type Admin = {
    name: string;
    privileges: string[]
}

type User  = {
    name: string;
    startData: Date;
}




// interface AdminUser extends Admin, User {}
//=====================================

// type ComplexType = string | number

// function combine(a: ComplexType, b: ComplexType) {
//     if (typeof a === "string" || typeof b === "string") {
//         return a.toString() + b.toString() 
//     }
//     return a+b
// }
//
// type AdminOrUser = Admin | User;
 
// function showDate (el: AdminOrUser) {
//     if ('startDate' in el) {
//         console.log(el);
//     }
// }


abstract class Boy {
    constructor(public name: string) {
    }
}

class Bad extends Boy{
    incult() {
       console.log('incult');
       
   }
}


class Good extends Boy{
    advice() {
       console.log('advice');
       
   }
}

const good = new Good('Jon')
const bad = new Bad('Oko')

function guys(user: Boy) {
    if (user instanceof Good) {
        user.advice()
    }
}

// interface Person {
//     name: string;
//     [x: string]: string | number;

// }

// const man: Person = {
    
// }






