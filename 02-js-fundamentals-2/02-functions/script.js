"use strict";

/**
 * Functions
 */

// declaration
function logger() {
  console.log("My name is John");
}

// call/invoke/run function
logger();
logger();
logger();

// returning value
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;

  return juice;
}

console.log(fruitProcessor(2, 3));
console.log(fruitProcessor(3, 20));

// store result of the function in var
const appleOrangeJuice = fruitProcessor(4, 6);
console.log(appleOrangeJuice);

const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);
