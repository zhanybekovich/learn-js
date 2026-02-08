"use strict";

// practice
function func(n) {
  let count = 0;

  while (n >= 10) {
    n = n / 2;
    count++;
  }

  return count;
}

console.log(func(200));
