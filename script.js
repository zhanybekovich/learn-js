"use strict";

// this

const p1 = document.querySelector("#text-1");
const p2 = document.querySelector("#text-2");
const p3 = document.querySelector("#text-3");
const p4 = document.querySelector("#text-4");
const p5 = document.querySelector("#text-5");

function func() {
  this.textContent += "!";
}

p1.addEventListener("click", func);
p2.addEventListener("click", func);
p3.addEventListener("click", func);
p4.addEventListener("click", func);
p5.addEventListener("click", func);
