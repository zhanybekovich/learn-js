"use strict";

// practice
const arr = [];
let count = 1;
for (let i = 0; i < 4; i++) {
  arr[i] = [];
  for (let j = 0; j < 2; j++) {
    arr[i].push(count++);
  }
}
console.log(arr);

const arr2 = [];
count = 2;

for (let i = 0; i < 4; i++) {
  arr2[i] = [];
  for (let j = 0; j < 3; j++) {
    arr2[i].push(count);
    count += 2;
  }
}
console.log(arr2);

const arr3 = [];
count = 1;
for (let i = 0; i < 2; i++) {
  arr3[i] = [];
  for (let j = 0; j < 2; j++) {
    arr3[i][j] = [];
    for (let k = 0; k < 2; k++) {
      arr3[i][j].push(count++);
    }
  }
}
console.log(arr3);
