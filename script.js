"use strict";

// loops: for with arrays

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}

for (let i = 0; i <= arr.length - 1; i++) {
  if (i !== 0 && i !== arr.length - 1) {
    console.log(arr[i]);
  }
}

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

arr = ["a", "b", "c", "d", "e"];

for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}
