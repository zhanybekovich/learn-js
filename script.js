"use strict";

// practice
let numbers = [];

for (let i = 1; i <= 10; i++) {
  numbers.push(i);
}
console.log(numbers);

let x = [];
for (let i = 1; i <= 10; i++) {
  x.push("x");
}
console.log(x);

let mixed = [1, -20, 34, 59, -2];
let positive = [];

for (let n of mixed) {
  if (n > 0) {
    positive.push(n);
  }
}
console.log(positive);
