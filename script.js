"use strict";

// closure practice
function test() {
  let num = 3;

  return function () {
    if (num === 0) {
      console.log("Countdown finished!");
    } else {
      console.log(num);
      num--;
    }
  };
}

let func = test();
func();
func();

let anotherFunc = test();
anotherFunc();
anotherFunc();

func();
anotherFunc();

func();
func();
anotherFunc();
