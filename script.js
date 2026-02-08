"use strict";

// multidimensional arrays
let arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

let sum = 0;

for (let items of arr) {
  for (let subitems of items) {
    for (let subsubitem of subitems) {
      sum += subsubitem;
    }
  }
}

console.log(sum);
