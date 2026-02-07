"use strict";

// loops: for with arrays

let arr = [2, 5, 9, 15, 1, 4];

for (let x of arr) {
  if (x > 3 && x < 10) {
    console.log(x);
  }
}

let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
for (let key in obj) {
  if (obj[key] % 2 !== 0) {
    console.log(obj[key]);
  }
}
