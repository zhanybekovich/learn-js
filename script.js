"use strict";

// split, join
let str = "1-2-3-4-5";
let numbers = str.split("-");
console.log(numbers);

str = "12345";
numbers = str.split("");
console.log(numbers);

let arr = [1, 2, 3, 4, 5];
str = arr.join("-");
console.log(str);
