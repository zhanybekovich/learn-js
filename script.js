"use strict";

// loops: for-in
let user = {
  name: "John",
  email: "john@john.com",
  city: "London",
};

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
