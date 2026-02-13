"use strict";

// clearInterval

const start = document.querySelector("button");
const stop = document.querySelector("#stop");
const p = document.querySelector("p");

let timerId;
start.addEventListener("click", function () {
  let i = +p.textContent;

  timerId = setInterval(function () {
    i--;
    p.textContent = i;
  }, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(timerId);
});
