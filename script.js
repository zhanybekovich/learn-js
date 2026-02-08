"use strict";

// multidimensional arrays
let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let sum = 0;

for (let el of arr) {
  for (let item of el) {
    sum += item;
  }
}

console.log(sum);
