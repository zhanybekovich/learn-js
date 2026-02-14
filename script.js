"use strict";

const div = document.querySelector("div");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  div.style.width = parseInt(div.style.width) + 50 + "px";
  div.style.height = parseInt(div.style.height) + 50 + "px";
});
