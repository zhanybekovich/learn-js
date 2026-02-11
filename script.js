"use strict";

// removeEventListener
const link = document.querySelector("a");
const btn1 = document.querySelector("#btn1");

function func() {
  link.textContent += `(${link.href})`;
  this.removeEventListener("click", func);
}

btn1.addEventListener("click", func);

const btn2 = document.querySelector("#btn2");

function increment() {
  let current = +btn2.textContent;
  btn2.textContent = current + 1;

  if (+btn2.textContent === 10) {
    btn2.removeEventListener("click", increment);
  }
}

btn2.addEventListener("click", increment);
