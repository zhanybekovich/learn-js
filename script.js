"use strict";

// merge arrays with spread operator (ES6)
const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const merged = [...arr, ...arr2];

console.log(merged);
