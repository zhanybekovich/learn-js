"use strict";

const airline = "TAP Air Portugal";
const plane = "A320";

// split
console.log("a+very+nice_string".split("+"));

const [firstName, lastName] = "john doe".split(" ");
console.log(firstName, lastName);

const newName = ["Mr.", firstName, lastName].join(" ");
console.log(newName);

// padding
const message = "Go to gate 23";
console.log(message.padStart(25, "*"));
console.log(message.padEnd(25, "*"));
console.log(message.padStart(25, "*").padEnd(50, "*"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);

  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(4215457812455885));

// repeat
const message2 = "Bad weather... All Departures Delayed... ";
console.log(message2.repeat(5));
