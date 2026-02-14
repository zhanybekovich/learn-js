"use strict";

const div = document.querySelector("div");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  div.style.width = "400px";
  div.style.height = "300px";
  div.style.border = "1px solid blue";
});
