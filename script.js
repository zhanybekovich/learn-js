"use strict";

// function with params
function calcCube(n) {
  console.log(Math.pow(n, 3));
}
calcCube(2);

function checkNumber(n) {
  if (n > 0) {
    console.log("+++");
  } else {
    console.log("---");
  }
}
checkNumber(3);
checkNumber(-5);
