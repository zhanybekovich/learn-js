"use strict";

// break
let n = [1, 4, 2, -5, 9, 3, 2, 0, 2, 5];
for (let x of n) {
  if (x === 0) {
    break;
  }

  console.log(x);
}

console.log("++++++");
let sum = 0;
for (let x of n) {
  if (x < 0) {
    break;
  }

  sum += x;
}
console.log(sum);

console.log("++++++");
for (let i = 0; i <= n.length - 1; i++) {
  if (n[i] === 3) {
    console.log(i);
  }
}

console.log("****");
sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
  if (sum > 100) {
    console.log(i);
    break;
  }
}
