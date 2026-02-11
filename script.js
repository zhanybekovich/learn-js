"use strict";

// classList

console.log(document.querySelector("p").classList.length);

for (let className of document.querySelector("p").classList) {
  console.log(className);
}
