"use strict";

// DOM
console.log(document.querySelector("#elem").className);

const div = document.querySelector("#elem");
const divWithClasses = document.querySelector("#manyClasses");
document.querySelector("#addClass").addEventListener("click", () => {
  div.className = "text";
  console.log(divWithClasses.className.split(" "));
});
