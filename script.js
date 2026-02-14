"use strict";

const div = document.querySelector("div");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log(div.style.borderWidth);
  console.log(div.style.borderStyle);
  console.log(div.style.borderColor);
});
