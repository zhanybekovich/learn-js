"use strict";

// filter
// 1
const numbers = [1, -2, 30, -4, 9, 7, 50];
const positives = numbers.filter((n) => n > 0);
console.log(positives);

// 2
const negatives = numbers.filter((n) => n < 0);
console.log(negatives);

// 3
const positiveAndLess10 = numbers.filter((n) => n > 0 && n < 10);
console.log(positiveAndLess10);

// 4
const words = ["hello", "this is a long string", "beautiful", "happy", "yeaa"];
const more5Symbols = words.filter((word) => word.length > 5);
console.log(more5Symbols);

// 5
const less30 = numbers.filter((n, index) => n * index < 30);
console.log(less30);

// 6
const mixed = [1, 2, [3, 4], 5, [6, 7]];
const primitives = mixed.filter((item) => typeof item !== "object");
console.log(primitives);
