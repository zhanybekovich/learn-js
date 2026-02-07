"use strict";

// adding values to the object
let user = {
  name: "John",
  surname: "Doe",
};

console.log(user.name);
console.log(user.surname);

user.name = "Bob";
user.surname = "Peterson";

console.log(user.name);
console.log(user.surname);

user.email = "user@company.com";
console.log(user.email);

let product = {};
product.title = "iPhone";
product.price = 1000;
product.is_available = true;

console.log(product);
