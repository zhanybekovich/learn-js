"use strict";

// input event
const input = document.querySelector("input");
const p = document.querySelector("p");

const limit = 5;

input.addEventListener("input", function () {
  const len = this.value.length;

  if (len <= limit) {
    p.textContent = `Left: ${limit - len}`;
  } else {
    p.textContent = `Exceeding: ${len - limit}`;
  }
});
