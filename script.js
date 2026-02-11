"use strict";

// practice
const inputs = document.querySelectorAll("input");
const p = document.querySelector("p");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  p.textContent = [...inputs].reduce(
    (sum, item) => sum + Number(item.value),
    0,
  );
});
