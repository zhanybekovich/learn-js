"use strict";

const airline = "TAP Air Portugal";
const plane = "A320";

// lowercase
console.log(airline.toLowerCase());

// uppercase
console.log(airline.toUpperCase());

// trim
console.log("   helloo ".trim());

// trimStart
console.log("   helloo ".trimStart());

// trimEnd
console.log("   helloo ".trimEnd());

// replace
console.log("XYZ".replace("X", "A"));

// regular expression replacement
const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace(/door/g, "gate"));

// replaceAll
console.log("XYZX".replaceAll("X", "A"));

// startsWith
console.log("bob".startsWith("b"));
console.log("bob".startsWith("B"));

// endsWith
console.log("bob".endsWith("b"));
console.log("bob".endsWith("B"));
