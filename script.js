"use strict";

// practice
// 1
const arr = [
  function () {
    return 1;
  },
  function () {
    return 2;
  },
  function () {
    return 3;
  },
];
for (const func of arr) {
  console.log(func());
}
