"use strict";

// DOM

const btn1 = document.querySelector("#button1");
const btn2 = document.querySelector("#button2");
const btn3 = document.querySelector("#button3");

btn1.addEventListener("click", function () {
  console.log(1);
});

btn2.addEventListener("click", () => {
  console.log(2);
});

function log3() {
  console.log(3);
}
btn3.addEventListener("click", log3);
