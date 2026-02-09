"use strict";

// every
// 1
const numbers = [1, 9, 4, 6, 3];
console.log(numbers.every((n) => n > 0));
console.log(numbers.every((n, index) => n * index < 30));
