"use strict";

// practice
let arr = ["a", "b", "c", "d", "e"];
let flag = false;

for (let x of arr) {
  if (x === "c") {
    flag = true;
    break;
  }
}

flag ? console.log("+++") : console.log("---");

let a = 5;
let isSimple = true;

if (a <= 1) {
  isSimple = false;
} else {
  for (let i = 2; i * i <= a; i++) {
    if (a % i === 0) {
      isSimple = false;
      break;
    }
  }
}

console.log(isSimple ? "Simple" : "Not simple");
