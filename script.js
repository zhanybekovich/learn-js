"use strict";

const div = document.querySelector("div");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log(parseFloat(div.style.fontSize));
});
