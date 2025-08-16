// Data Types in JS

// In JS every value is an Object or a primitive value. Value is primitive if it is not an object.

// Primitive data types:
// 1 - Number: integer or float
let age = 25;
let price = 45.5;
console.log(age, price);

// 2 - Strings
let userName = "Bob";
console.log(userName);

// 3 - Boolean
let isStudent = true;
let hasCar = false;
console.log(isStudent, hasCar);

// 4 - Undefined: value taken by a var that is not defined yet
let firstName;
console.log(firstName);

// 5 - Null: means empty value
let friend = null;
console.log(firstName);

// 6 - Symbol (ES2015): value that is unique and cannot be changed
let id = Symbol("id");
console.log(id);

// 7 - BigInt (ES2020): larger integers
let myBigInteger = 646562164594162164596132164461654654n;
console.log(myBigInteger);

// checking type
console.log(typeof userName);
console.log(typeof isStudent);
console.log(typeof myBigInteger);
console.log(typeof id);
console.log(typeof age);
console.log(typeof price);

// JS is dynamic typing
let myVar = "Hello";
console.log(myVar);

myVar = true;
console.log(myVar);

myVar = 145;
console.log(myVar);
