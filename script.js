"use strict";

// practice
let sum = 0;
for (let i = 2; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);

sum = 0;
for (let i = 1; i <= 99; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log(sum);

let product = 1;
for (let i = 1; i <= 20; i++) {
  product *= i;
}
console.log(product);
