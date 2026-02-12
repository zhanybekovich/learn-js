"use strict";

// disabled input
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  input.disabled = false;
});
