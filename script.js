"use strict";

// clearInterval

const button = document.querySelector("button");
const p = document.querySelector("p");

button.addEventListener("click", function () {
  let i = +p.textContent;

  setInterval(function () {
    i--;
    p.textContent = i;
  }, 1000);
});
