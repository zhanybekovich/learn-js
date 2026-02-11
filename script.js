"use strict";

// style
const btn = document.querySelector("button");
const div = document.querySelector("div");

btn.addEventListener("click", function () {
  div.style.width = "300px";
  div.style.height = "300px";
  div.style.border = "1px solid blue";
  div.style.margin = "30px 0";
  div.style.backgroundColor = "green";
});
