"use strict";

// append, prepend

const ul = document.querySelector("ul");

const start = document.createElement("li");
start.textContent = "start";

const finish = document.createElement("li");
finish.textContent = "finish";

ul.prepend(start);
ul.append(finish);
