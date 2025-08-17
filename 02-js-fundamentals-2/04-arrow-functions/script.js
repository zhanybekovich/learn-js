"use strict";

/**
 * Arrow Functions
 */

// one line arrow function
const calcAge = (birthYear) => 2025 - birthYear;
console.log(calcAge(2002));

// multiline arrow function
const calcAge2 = (birthYear) => {
  const age = 2025 - birthYear;
  return age;
};
console.log(calcAge2(2001));
