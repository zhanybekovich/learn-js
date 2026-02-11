"use strict";

// data attributes
const setDataBtn = document.querySelector("#set-data");
const readDataBtn = document.querySelector("#read-data");

setDataBtn.addEventListener("click", function () {
  let currentCount = Number(setDataBtn.dataset.clicks);
  currentCount++;
  setDataBtn.dataset.clicks = currentCount;
});

readDataBtn.addEventListener("click", function () {
  readDataBtn.textContent = ` ${setDataBtn.dataset.clicks}`;
});
