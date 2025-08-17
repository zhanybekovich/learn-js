const firstName = "John";
const job = "teacher";
const birthYear = 1991;
const year = 2025;

// const john =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(john);

// template literals (ES6)
const john = `I'm ${firstName} a ${year - birthYear} years old ${job}!`;
console.log(john);

// multiline string
// console.log(
//   "String with \n\
//   multiple \n\
//   lines"
// );
console.log(`String
  with
  multiple
  lines`);
