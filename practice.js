console.log("Hello World");
let a = 5;
a="Hello";
console.log(a);
// let const var are different in scope and mutability.
// difference between the all 3 : 
// var is function scoped and can be re-declared and updated.
// let is block scoped and can be updated but not re-declared.
// const is block scoped and cannot be updated or re-declared.
const b = 10;
// b = 15; // This will give an error
console.log(b);

// Task1  : Write 5 varibales in the console with and use typeof to check their data types.
// Bonus : Create one object and one array and then check their data types using typeof.

let num = 42;
let str = "JavaScript";
let bool = true;
let ch = 'A';
let undef;
let nul = null;
console.log(typeof num);    // number
console.log(typeof str);    // string
console.log(typeof bool);   // boolean
console.log(typeof undef); // undefined
console.log(typeof ch);     // string
// why type of string and char both are string ? because in javascript there is no char data type.
console.log(typeof nul);    // object (this is a known quirk in JavaScript)
let obj = { name: "Alice", age: 30 };
let arr = [1, 2, 3, 4, 5];
console.log(typeof obj);    // object
console.log(typeof arr);    // object

// Sure! JavaScript has several data types, which can be categorized into primitive and non-primitive types.

let numExample = 42; // number

let strExample = "Hello, World!"; // string

let boolExample = true; // boolean

let undefExample; // undefined

let nullExample = null; // null

let symExample = Symbol("unique"); // symbol

let bigIntExample = 9007199254741991n;


let objExample = { name: "Alice", age: 30 };

let arrExample = [1, 2, 3, 4, 5];


let x=10, y=5;
console.log(x+y);
console.log(x>y);
console.log(x=="10");
console.log(x===10);
console.log(y);
let result = x>y ? "x is greater" : "y is greater";
console.log(result);

console.log(Math.random());
console.log(Math.floor(Math.random()*100)+1); // random number between 1 and 100
