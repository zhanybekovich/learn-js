"use strict";

/**
 * Function can call another function
 */

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange`;

  return juice;
}

const appleJuice = fruitProcessor(2, 3);
console.log(appleJuice);
