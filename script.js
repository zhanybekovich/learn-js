"use strict";

// practice
// function allAreEvenNumbers(arr) {
//   for (let x of arr) {
//     if (x % 2 !== 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(allAreEvenNumbers([2, 3, 4, 5, 6]));
// console.log(allAreEvenNumbers([2, 2, 4, 8, 6]));

// function allDigitsAreEven(n) {
//   let str = String(n);

//   for (let x of str) {
//     if (+x % 2 !== 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(allDigitsAreEven(246));
// console.log(allDigitsAreEven(234));

function hasTwoIdenticalInARow(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }

  return false;
}

console.log(hasTwoIdenticalInARow([2, 1, 4, 5, 8, 8]));
console.log(hasTwoIdenticalInARow([1, 2, 3, 4, 5]));
