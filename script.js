"use strict";

// default value in object destructuring
const options = {
  color: "red",
  width: 400,
  height: 500,
};

const { color, width, height, zIndex = 10 } = options;
console.log(color, width, height, zIndex);
