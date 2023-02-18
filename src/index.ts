// Basic Types

let id: number = 5
let company: string = "Hyun Sung Cho"
let isPublishsed: boolean = true
let x: any = "hello"
let age: number

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, "hello"]

age = 30
x = true


// Tuple
let persons: [number, string, boolean] = [1,"hyun", true]
let employees: [number, string][]

employees = [
[1, "brand"],
[2, "John"],
[3, "Jessie"]
]

// Union
let productId: string | number = 22

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

console.log(Direction1.Left)

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left", 
    Right = "Right"
}

console.log(Direction1.Left)

// Object

type User = {
    id: number,
    name: string
}

// const user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: "Hyun"
// }
// above and below are the same
const user: User = {
    id: 1,
    name: "Hyun"
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid // 1st way

let customerId  = cid as number // 2nd way

// Functions
function addNum(x: number, y: number): number{
    return x + y
}


console.log(addNum(1,2))

function log(message: string | number): void {
    console.log(message)
}
log("works")
log(1)
log(true) // no

// Interface

interface UserInterface {
    readonly id: number, //read only
    name: string,
    age?: number // optional chaining
}

const user1: UserInterface = {
    id: 1,
    name: "John",
    
}

user1.id = 5 //set it to something
//however readonly

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number  => x + y
const subtract: MathFunc = (x: number, y: number): number  => x - y


type Point = number | string
const p1: Point = 1

// interface Point =number | string
// const p2: Point = 1 
// cannot use interface with primitves or unions

interface PersonInterface {
    id: number, //read only
    name: string,
    register(): string
}

// Classes
class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}


const brad = new Person(1, "Brad")
const mike = new Person(2, "Miked")


// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position =  position
    }

}

const emp = new Employee ( 3, "Shawan","Developer")

console.log(emp.register())


brad.id // private & protected extend from this class
console.log(brad, mike)  

// Generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(["brad", "john", "jill"])

console.log(numArray, strArray)
strArray.push("hello") // no error so need to create generics put <T> and T T <number> <string> then error

