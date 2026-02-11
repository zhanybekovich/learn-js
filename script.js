"use strict";

// DOM
const input = document.querySelector("#input");

input.addEventListener("focus", function () {
  input.value = 1;
});

input.addEventListener("blur", function () {
  input.value = 2;
});

const numInput = document.querySelector("#num");

numInput.addEventListener("blur", function () {
  console.log(Number(numInput.value) * Number(numInput.value));
});

const inputWithText = document.querySelector("#withText");
inputWithText.addEventListener("blur", () => {
  inputWithText.value = "";
});
