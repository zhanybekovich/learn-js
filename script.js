"use strict";

// practice
const items = document.querySelectorAll("li");

for (let item of items) {
  item.addEventListener("click", function func() {
    const input = document.createElement("input");
    input.type = "text";
    input.value = item.textContent;

    item.textContent = "";
    item.appendChild(input);
    input.focus();

    input.addEventListener("blur", function () {
      item.textContent = this.value;
      item.addEventListener("click", func);
    });

    item.removeEventListener("click", func);
  });
}
