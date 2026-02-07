"use strict";

// practice
let arr = [2, 5, 9, 3, 1, 4];
let sum = 0;

for (let x of arr) {
  sum += x;
}
console.log(sum);

sum = 0;
for (let x of arr) {
  if (x % 2 === 0) {
    sum += x;
  }
}
console.log(sum);

sum = 0;
for (let x of arr) {
  sum += x * x;
}
console.log(sum);

let res = 1;
for (let x of arr) {
  res *= x;
}
console.log(res);
