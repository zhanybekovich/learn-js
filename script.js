"use strict";

// querySelectorAll
const paragraphs = document.querySelectorAll("p");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  paragraphs.forEach((item, index) => (item.textContent += index));
});

const inputs = document.querySelectorAll("input");
const sumBtn = document.querySelector("#get-sum");
const resultP = document.querySelector("#result");

sumBtn.addEventListener("click", function () {
  let sum = 0;
  inputs.forEach((n) => (sum += Number(n.value)));
  resultP.textContent = sum;
});
