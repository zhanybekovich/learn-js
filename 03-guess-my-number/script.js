"use strict";

console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 15;
document.querySelector(".score").textContent = 90;
document.querySelector(".guess").value = 14;
