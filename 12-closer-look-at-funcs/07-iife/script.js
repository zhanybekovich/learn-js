"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

function book(flightNum, name) {
  console.log(
    `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
  );
  this.bookings.push({ flight: `${this.iataCode}${flightNum}, ${name}` });
}

// immediately invoked functions
(function () {
  console.log("This will never run again");
})();

(() => console.log("This will also never run again"))();

cl;
