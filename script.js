"use strict";

// Math module
console.log(Math.pow(2, 10));
console.log(Math.sqrt(245));

const arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for (let n of arr) {
  sum += Math.sqrt(n * n * n);
}
console.log(sum);
