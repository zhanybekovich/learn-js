"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}, ${name}` });
  },
};

lufthansa.book("3456", "John Doe");
lufthansa.book("4585", "Mike Smith");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// this does not work
// book(235, "Sara Wish");

// explicitly setting this keywords to point objects
book.call(eurowings, 234, "Sara Pete");
book.call(lufthansa, 4586, "Marry Potter");

// apply works as call but receives array of arguments
// apply is not recommended
const flightData = [586];
book.apply(eurowings, [258, "Markus Dubua"]);
