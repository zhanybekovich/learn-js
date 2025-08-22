"use strict";

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[6]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  address: "Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,

  orderDelivery({ time, address }) {
    return { time, address };
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

// creating map
const question = new Map([
  ["question", "What is the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [(false, "Try again")],
]);

console.log(question);

// iteration
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`${key} -> ${value}`);
  }
}

// converting map to an array
console.log([...question]);

// converting object to map
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);
