"use strict";

// contains

const table = document.querySelector("table");
const columns = document.querySelector("#columns");
const rows = document.querySelector("#rows");
const button = document.querySelector("button");

table.border = "1";

button.addEventListener("click", function () {
  for (let row = 1; row <= +rows.value; row++) {
    const tr = document.createElement("tr");

    for (let col = 1; col <= +columns.value; col++) {
      const td = document.createElement("td");
      td.textContent = "Item";

      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
});
