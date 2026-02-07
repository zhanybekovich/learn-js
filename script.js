"use strict";

// practice
let month = 12;

if (month === 12 || month === 1 || month === 2) {
  console.log("Winter");
} else if (month >= 3 && month <= 5) {
  console.log("Spring");
} else if (month >= 6 && month <= 8) {
  console.log("Summer");
} else if (month >= 9 && month <= 11) {
  console.log("Autumn");
} else {
  console.log("Unknown moth");
}

let str = "abcde";

str[0] === "a" ? console.log(true) : console.log(false);

let x = 12345;
Number(String(x)[0]) === 1 ||
Number(String(x)[0]) === 2 ||
Number(String(x)[0]) === 3
  ? console.log("1 or 2 or 3")
  : console.log("not");

let y = 234;
console.log(Number(String(y)[0]) + Number(String(y)[1]) + Number(String(y)[2]));

let z = 123456;
Number(String(z)[0]) + Number(String(z)[1]) + Number(String(z)[2]) ===
Number(String(z)[3]) + Number(String(z)[4]) + Number(String(z)[5])
  ? console.log("===")
  : console.log("!==");
