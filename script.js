"use strict";

// practice
const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("blur", () => {
  p.textContent = input.value
    .trim()
    .split("")
    .reduce((sum, n) => sum + +n, 0);
});
