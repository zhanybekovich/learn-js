"use strict";

// reference types

let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = obj1;

console.log(obj1);
console.log(obj2);

obj2.a = 200;

console.log(obj1);
console.log(obj2);

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = "a";
console.log(arr1);
console.log(arr2);
