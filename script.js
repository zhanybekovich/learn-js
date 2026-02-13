"use strict";

// contains

const table = document.querySelector("table");
table.border = "1";

for (let i = 0; i <= 5; i++) {
  let tr = document.createElement("tr");

  for (let i = 0; i <= 5; i++) {
    let td = document.createElement("td");
    td.textContent = "Item";
    tr.appendChild(td);
  }

  table.appendChild(tr);
}
