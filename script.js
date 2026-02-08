"use strict";

// practice
let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;

for (let el of arr) {
  if (String(el)[0] == 1 || String(el)[0] == 2) {
    sum += el;
  }
}
console.log(sum);
