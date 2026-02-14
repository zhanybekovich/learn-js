"use strict";

const div = document.querySelector("div");
const hide = document.querySelector("#hide");
const show = document.querySelector("#show");

hide.addEventListener("click", () => {
  div.style.display = "none";
});

show.addEventListener("click", () => {
  div.style.display = "block";
});
