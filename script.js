"use strict";

// cloneNode

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  const clone = input.cloneNode(true);

  document.body.appendChild(clone);
});
