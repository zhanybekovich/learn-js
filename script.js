"use strict";

// practice
const employees = [
  { name: "employee1", age: 30, salary: 400 },
  { name: "employee2", age: 31, salary: 500 },
  { name: "employee3", age: 32, salary: 600 },
];

const table = document.querySelector("table");
table.border = "1";

const headingRow = document.createElement("tr");
const keys = Object.keys(employees[0]);

for (let key of keys) {
  const th = document.createElement("th");
  th.textContent = key.toUpperCase();

  headingRow.appendChild(th);
}

table.appendChild(headingRow);

employees.forEach((item) => {
  const row = document.createElement("tr");

  for (let value of Object.values(item)) {
    const col = document.createElement("td");
    col.textContent = value;
    row.appendChild(col);
  }

  table.appendChild(row);
});

const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const salaryInput = document.querySelector("#salary");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const tr = document.createElement("tr");
  const values = [nameInput.value, ageInput.value, salaryInput.value];

  for (const value of values) {
    const td = document.createElement("td");
    td.textContent = value;
    tr.appendChild(td);
  }

  table.appendChild(tr);
});
