"use strict";

// practice
const arr = [];
for (let i = 0; i <= 2; i++) {
  arr[i] = [];
  for (let j = 1; j <= 5; j++) {
    arr[i].push(j);
  }
}
console.log(arr);

let arr2 = [];
for (let i = 0; i < 3; i++) {
  arr2[i] = [];
  for (let j = 0; j < 2; j++) {
    arr2[i][j] = [];
    for (let k = 0; k < 5; k++) {
      arr2[i][j].push(k + 1);
    }
  }
}
console.log(arr2);
