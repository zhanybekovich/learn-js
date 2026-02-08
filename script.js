"use strict";

// Math random practice

console.log(Math.floor(Math.random() * (100 - 1 + 1) + 1));

const randoms = [];
for (let i = 0; i < 10; i++) {
  randoms.push(Math.floor(Math.random() * 10));
}
console.log(randoms);
