"use strict";

// change var name in object destructuring
const options = {
  color: "red",
  width: 400,
  height: 500,
};

const { color: c, width: w, height: h } = options;
console.log(c, w, h);
