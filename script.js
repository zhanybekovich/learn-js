"use strict";

// skipping in array destructuring

const arr = ["John", "Smit", "development", "programmer", 2000];
const [, , department, position] = arr;

console.log(department, position);
