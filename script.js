"use strict";

// practice
const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("blur", function () {
  p.textContent += " " + this.value;
});
