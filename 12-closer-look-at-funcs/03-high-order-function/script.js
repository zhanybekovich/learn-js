"use strict";

/**
 * high-order function -> a function that receives another function as an argument, that returns a new function or both
 */

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");

  return [first.toUpperCase(), ...others].join(" ");
};

// high-order function
const transformer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}`);
};

transformer("javascript is the best", upperFirstWord);
transformer("javascript is the best", oneWord);
