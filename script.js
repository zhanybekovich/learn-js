"use strict";

// working with select
const select = document.querySelector("#select");
const btn = document.querySelector("button");
const p = document.querySelector("p");

btn.addEventListener("click", function () {
  p.textContent = select.value;
});
