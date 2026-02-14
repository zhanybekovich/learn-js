"use strict";

const div = document.querySelector("div");
const hide = document.querySelector("#color");
const show = document.querySelector("#remove-color");

hide.addEventListener("click", () => {
  div.style.backgroundColor = "red";
});

show.addEventListener("click", () => {
  div.style.backgroundColor = "initial";
});
