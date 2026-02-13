"use strict";

// setTimeout

const p = document.querySelector("p");

let i = 0;
function timer() {
  setTimeout(() => {
    i++;
    p.textContent = i;

    if (i < 10) {
      timer();
    }
  }, 1000);
}

timer();
