"use strict";

// DOM
const textP = document.querySelector("p");
console.log(textP.id);

const input = document.querySelector("input");
console.log(input.id);
console.log(input.type);

// change attribute
input.type = "submit";
input.value = "Send";

const link = document.querySelector("a");
const showHrefBtn = document.querySelector("#showHref");

showHrefBtn.addEventListener("click", function () {
  link.textContent = `(${link.href})`;
});

const img = document.querySelector("img");
const changeSizeBtn = document.querySelector("#changeSize");

changeSizeBtn.addEventListener("click", function () {
  img.width = 200;
});
