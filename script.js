"use strict";

const div = document.querySelector("div");
const btn = document.querySelector("#style");

btn.addEventListener("click", () => {
  const computedStyle = getComputedStyle(div);
  console.log(computedStyle);
  console.log(computedStyle.backgroundColor);
  console.log(computedStyle.width);
});
