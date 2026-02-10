"use strict";

// DOM
const p = document.querySelector("p");
const readHTMLBtn = document.querySelector("#btn1");
const makeCursiveBtn = document.querySelector("#btn2");

readHTMLBtn.addEventListener("click", function () {
  console.log(p.innerHTML);
});

makeCursiveBtn.addEventListener("click", function () {
  const text = p.textContent;
  p.innerHTML = `<i>${text}</i>`;
});
