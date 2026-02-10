"use strict";

// rest operator
function calcAverage(...nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}

console.log(calcAverage(1));
console.log(calcAverage(1, 2));
console.log(calcAverage(1, 2, 3));
console.log(calcAverage(1, 2, 3, 4));
