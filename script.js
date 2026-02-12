"use strict";

// input event
const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("input", function () {
  if (this.value.length === 5) {
    p.textContent = this.value;
  }
});
