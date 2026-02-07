"use strict";

// else if
let n = 5;

if (n == 1) {
  console.log(1);
} else if (n == 2) {
  console.log(2);
} else if (n == 3) {
  console.log(3);
} else {
  console.log("Invalid value");
}

let day = 15;

if (day <= 10) {
  console.log("1st");
} else if (day > 10 && day <= 20) {
  console.log("2nd");
} else if (day > 20) {
  console.log("3rd");
}
