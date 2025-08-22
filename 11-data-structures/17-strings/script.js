"use strict";

const airline = "TAP Air Portugal";
const plane = "A320";

// get symbol at position
console.log(plane[0]);

// length
console.log(airline.length);

// indexOf
console.log(airline.indexOf("r"));

// last index of
console.log(airline.lastIndexOf("r"));

// slice
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat");
  } else {
    console.log("You got lucky");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("11C");
