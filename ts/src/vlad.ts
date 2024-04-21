type ID = string | number

const id1: ID = "id"
const id2: ID = 1
//==================

function infinite(): never{
    while (true) {
        
    }
}

function newError(): never{
    throw newError
}

//=========================

const contact: [string, number] = ['name', 234]

//===========================
function addNumber(a: number, b: number): number{
    return a+ b
}

function toUpper(str: string): string{
   return str.trim()
}

const arrNumb: number[] = [1, 2, 3, 4, 5]
const arrStr: string[] = ['a', 'b']

function reverse <T>(arr: T[]): T[]{
return arr.reverse()
}

