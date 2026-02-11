"use strict";

// this

const elem = document.querySelector("#elem");

function func() {
  console.log(this.value);
}

elem.addEventListener("blur", func);

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let current = Number(this.textContent);
  this.textContent = current + 1;
});
