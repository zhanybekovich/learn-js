"use strict";

// reduceRight
const arr = [1, 2, 3, 4, 5, 6];
const sumOfArr = arr.reduceRight((sum, elem) => sum + elem, 0);
console.log(sumOfArr);
