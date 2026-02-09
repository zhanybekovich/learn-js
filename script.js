"use strict";

// some
// 1
const numbers = [1, 9, 4, 6, 33];
console.log(numbers.some((n) => n > 0));
console.log(numbers.some((n, i) => n * i < 30));
