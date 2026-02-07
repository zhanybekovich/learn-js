"use strict";

// invert logical expressions
let num = 5;

if (num > 0 && num < 5) {
  console.log("++");
} else {
  console.log("--");
}

if (!(num > 0 && num < 5)) {
  console.log("+++");
} else {
  console.log("---");
}
