"use strict";

// practice
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

for (let i = 0; i <= numbers.length - 1; i++) {
  numbers[i] = numbers[i] * numbers[i];
}
console.log(numbers);

for (let i = 0; i <= numbers.length - 1; i++) {
  numbers[i] -= 1;
}
console.log(numbers);

for (let i = 0; i <= numbers.length - 1; i++) {
  numbers[i] += 10;
}
console.log(numbers);
