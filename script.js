"use strict";

// rest of array
const arr = ["John", "Smit", "development", "programmer", 2000];

const [name, surname, ...info] = arr;

console.log(name, surname);
console.log(info);
