"use strict";

// nested loop

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 3; j++) {
    document.write(i);
  }
}

document.write("<br>");

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    document.write(i);
    document.write(j);
    document.write(" ");
  }
}
