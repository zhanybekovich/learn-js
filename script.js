"use strict";

// textarea
const elem = document.querySelector("#elem");

console.log(elem.value);

elem.addEventListener("blur", function () {
  document.querySelector("p").textContent = this.value;
});
