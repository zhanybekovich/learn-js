"use strict";

// event object
const elem = document.querySelector("#elem");
elem.addEventListener("click", func);
elem.addEventListener("dblclick", func);

function func(e) {
  if (e.type === "click") {
    elem.style.background = "green";
  }

  if (e.type === "dblclick") {
    elem.style.background = "blue";
  }
}
