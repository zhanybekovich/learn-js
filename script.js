"use strict";

// practice
const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("blur", () => {
  const numbers = input.value.split(",").map((item) => +item.trim());
  p.textContent = numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
});
