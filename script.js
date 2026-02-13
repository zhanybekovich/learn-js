"use strict";

// practice

const p = document.querySelector("p");

setInterval(() => {
  const time = new Date();
  p.textContent = `${String(time.getHours()).padStart(2, "0")}:${String(time.getMinutes()).padStart(2, "0")}:${String(time.getSeconds()).padStart(2, "0")}`;
}, 1000);
