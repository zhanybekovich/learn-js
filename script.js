"use strict";

const div = document.querySelector("div");
const hide = document.querySelector("#style");
const show = document.querySelector("#remove-color");

hide.addEventListener("click", () => {
  div.style.cssText = `
    width: 100px;
    height: 100px;
    background-color: green;
  `;
});
