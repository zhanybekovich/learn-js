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

// Map: key-value data structures

// create an empty map
const rest = new Map();

// add
rest.set("name", "Modern Italiano");

// keys can be anything
rest.set(1, "Firenze, Italy");

// chaining
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");
console.log(rest);

// retrieving
console.log(rest.get("name"));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open" && time < rest.get("close"))));

// checking
console.log(rest.has("categories"));

// delete
rest.delete(2);
console.log(rest);

// size
console.log(rest.size);

// clear
// rest.clear();
// console.log(rest);

// array can be a key
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr));
console.log(rest);
