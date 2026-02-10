"use strict";

// DOM
const btn = document.querySelector("#btn");
const p = document.querySelector("p");

btn.addEventListener("click", function () {
  console.log(p.textContent);
});

const sumBtn = document.querySelector("#sum");
const n1 = document.querySelector("#num1");
const n2 = document.querySelector("#num2");
const n3 = document.querySelector("#num3");
const result = document.querySelector("#result");

sumBtn.addEventListener("click", function () {
  result.textContent =
    Number(n1.textContent) + Number(n2.textContent) + Number(n3.textContent);
});

const textP = document.querySelector(".text");
const addExBtn = document.querySelector("#addExclamation");

addExBtn.addEventListener("click", function () {
  textP.textContent += "!";
});
