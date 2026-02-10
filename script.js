"use strict";

// calculating time
const now = new Date();
const date = new Date(2015, 11, 4, 23);

const diff = now.getTime() - date.getTime();
console.log(diff);
