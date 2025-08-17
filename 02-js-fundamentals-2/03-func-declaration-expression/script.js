"use strict";

/**
 * Function Declaration & Function Expression
 */

// function declaration
// can call before declaration
console.log(calcAge1(2002));
function calcAge1(birthYear) {
  return 2025 - birthYear;
}

console.log(calcAge1(1993));

// function expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

console.log(calcAge2(1995));
