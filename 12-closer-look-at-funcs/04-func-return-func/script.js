"use strict";

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("John");

const greeterHello = greet("Hello");
greeterHello("Bob");

greet("Hi")("Peter");
