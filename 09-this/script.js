"use strict";

/**
 * this keyword: special variable that is created for every execution context
 * takes the value of the 'owner' of the function in which the this keyword is used
 */

// global window this
console.log(this);

// this in objects
const user = {
  name: "john",

  userMethod: function () {
    console.log(this);
  },
};

user.userMethod();

const anotherUser = {
  name: "bob",

  userMethod: function () {
    console.log(this);
  },
};
anotherUser.userMethod();

// this in the arrow function
const calcAge = () => {
  console.log(this);
};
calcAge();

// this in the function declaration
function test() {
  console.log(this);
}
test();
