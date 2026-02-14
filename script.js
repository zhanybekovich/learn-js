"use strict";

const div = document.querySelector("div");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log(parseInt(div.style.width));
  console.log(parseInt(div.style.height));
});
