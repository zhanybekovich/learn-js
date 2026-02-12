"use strict";

// change event
const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("change", function () {
  console.log(this.value);
});
