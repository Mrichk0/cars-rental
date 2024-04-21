// class UseStatic {
//     private static count = 0

//     constructor() {
//         UseStatic.count += 1;
//     }

//     public static isStaticMethod() {
//         console.log('im boss static')
//     }

//     public showMeCount() {
//         console.log(UseStatic.count);
        
//     }
// }

// const obj1 = new UseStatic()
// const obj2 = new UseStatic()
// const obj3 = new UseStatic()

// UseStatic.isStaticMethod()



// interface IPerson {
//     name: string;
//     age: number;

//     greet(value:string):void
// }

// interface IPilot {
//     flyMassage():void
// }

// class Pilot implements IPerson,IPilot {
//     constructor(public name: string, public age: number) {
//         if (this.age < 28) {
//         throw new Error('pilot to yong')
//     }
//     }
    
//      greet(phrase: string): void {
//     console.log(phrase + ' ' + this.name );
//     };
    
//     flyMassage(): void {
//         console.log('het you');
        
//     }
// }

// abstract class Plane {
//     protected pilot?:IPilot

//     public sitInPlane(pilot:IPilot):void {
//         this.pilot = pilot
//     }

// public abstract startEngine (): boolean
// }



// class Boeing extends Plane {
//     public startEngine(): boolean {
//         if (!this.pilot) {
//       throw new Error('No pilot in cabin');
//         }
//         return true
//     }
// }


// const boeing = new Boeing()




// class House {

//     private tenants:string[] = [];
//     constructor(private readonly type: string, private street: string) {
//     }

//      public showAddress (this: House) {
//     console.log('Address: ' + this.street);
//   }

//   public showType (this: House) {
//     console.log('House Type: ' + this.type);
//   }

//   public addTenant (tenant: string) {
//     this.tenants.push(tenant);
//   }

//   public showTenants () {
//     console.log(this.tenants);
//   }
// }

// class StoneHouse extends House {
 
//     constructor(street: string, private boss: string) {
//         super('beton', street)
       
//     }
    
//     public showBoss() {
//         console.log(this.boss);
//         super.showTenants()
        
//     }
// }

// const stone = new StoneHouse('sreet', 'max')

// stone.showType()

// class UseStatic {
//     private static count = 0;
//     constructor() {
//         UseStatic.count += 1
//     }

//     public showStatic() {
//         console.log(UseStatic.count);
        
//     }
// }

// const stat1 = new UseStatic()
// const stat2 = new UseStatic()
// const stat3 = new UseStatic()





// class Pole extends Plane {
//     public start(): string {
//         return 'trattra'
//     }
// }

// class Boeing extends Plane {
//     public start(): string {
//         return 'whoooa'
//     }
// }

// const pole = new Pole()

// console.log(pole.start());

// interface IPerson {
//     name: string,
//     age: number,

//     greet(phrase: string):void
// }

// interface IPilot {
//     flyMassage(): void
// }
    
// class Terrorist implements IPilot {
//     bluff(): void{
//         console.log('plane is our');
        
//     }

//    flyMassage(): void {
//        console.log('vsim pizda');
//    }
    
    
// }

// // class Pilot implements IPerson, IPilot {
// //     constructor(public name: string, public age: number) {
// //         if (this.age < 28) {
// //             throw new Error('pilot to yong and')
// //         }
// //     }

// //     greet(phrase: string): void {
// //         console.log(phrase + '' + this.name)
// //     }

// //     flyMassage(): void {
// //         console.log('we are in the sky');
        
// //     }
// // }

// abstract class Plane {
//     protected pilot?:IPilot

//     public sitInPlane(pilot: IPilot):void {
//         this.pilot = pilot
//     }

//     public abstract start(): boolean
// }

// class Boeing extends Plane {
//    public start(): boolean {
//        if (!this.pilot) {
//            throw new Error('where our pilot??')
//        }

//        console.log('Запуск турбін');

//        this.pilot.flyMassage()

//        return true
//    }
// }

// const boeing = new Boeing()
// const pilot = new Terrorist()

// boeing.sitInPlane(pilot)

// boeing.start();


class Key{
    private signature: number
    constructor() {
        this.signature = Math.random()
    }

    getSignature(): number{
    return this.signature
}
}

class Person{
    constructor(public key: Key) {}
    
    getKey():Key{
    return this.key
}
}

abstract class House {
    protected door = false;
    private tenants: Person[]=[]
    constructor(public key: Key) {    
    }
    comeIn(person:Person):void {
        if (!this.door) {
            throw new Error('door is close')
        }

        this.tenants.push(person)
        console.log('Person inside');
    }

    abstract openDoor (key:Key): boolean;
}

class MyHouse extends House{
    openDoor(key: Key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error('wtf')
        }

        return this.door = true
    }
}

const key = new Key()

const house = new MyHouse(key)
const person1 = new Person(key);
house.openDoor(person1.getKey())
house.comeIn(person1)




