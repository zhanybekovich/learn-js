"use strict";

// practice
let x = 492;

let strX = String(x);

strX[strX.length - 1] == 0 ? console.log("Zero") : console.log("Not Zero");

let lastSymbol = strX[strX.length - 1];

lastSymbol == "0" ||
lastSymbol == 2 ||
lastSymbol == 4 ||
lastSymbol == 6 ||
lastSymbol == 8
  ? console.log("Even")
  : console.log("Odd");
