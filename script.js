"use strict";

// practice
// 1
const math = {
  sum: function (arr) {
    let sum = 0;
    for (let x of arr) {
      sum += x;
    }
    return sum;
  },
  square: function (arr) {
    let sum = 0;
    for (let x of arr) {
      sum += x * x;
    }
    return sum;
  },
  cube: function (arr) {
    let sum = 0;
    for (let x of arr) {
      sum += x * x * x;
    }
    return sum;
  },
};
console.log(math.sum([1, 2, 3]));
console.log(math.square([1, 2, 3]));
console.log(math.cube([1, 2, 3]));
