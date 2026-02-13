"use strict";

// clearInterval

let i = 3;

let timer = setInterval(() => {
  console.log(--i);

  if (i <= 0) {
    clearInterval(timer);
  }
}, 1000);
