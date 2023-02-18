"use strict";
// Basic Types
let id = 5;
let company = "Hyun Sung Cho";
let isPublishsed = true;
let x = "hello";
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hello"];
age = 30;
x = true;
// Tuple
let persons = [1, "hyun", true];
let employees;
employees = [
    [1, "brand"],
    [2, "John"],
    [3, "Jessie"]
];
// Union
let productId = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Left);
// const user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: "Hyun"
// }
// above and below are the same
const user = {
    id: 1,
    name: "Hyun"
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid // 1st way
let customerId = cid; // 2nd way
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
log("works");
log(1);
log(true); // no
const user1 = {
    id: 1,
    name: "John",
};
user1.id = 5; //set it to something
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const p1 = 1;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Brad");
const mike = new Person(2, "Miked");
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Shawan", "Developer");
console.log(emp.register());
brad.id; // private & protected extend from this class
console.log(brad, mike);
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "john", "jill"]);
console.log(numArray, strArray);
strArray.push("hello"); // no error so need to create generics put <T> and T T <number> <string> then error
