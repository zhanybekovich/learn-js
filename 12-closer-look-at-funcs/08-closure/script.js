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

/**
 * Closure
 */

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

const booker = secureBooking();
booker();
booker();

const booker2 = secureBooking();
booker2();
booker2();
booker2();
booker2();
booker2();
