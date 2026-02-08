"use strict";

// practice
let affairs = {
  2018: {
    11: {
      29: ["name111", "name112", "name113"],
      30: ["name121", "name122", "name123"],
    },
    12: {
      30: ["name211", "name212", "name213"],
      31: ["name221", "name222", "name223"],
    },
  },
  2019: {
    12: {
      29: ["name311", "name312", "name313"],
      30: ["name321", "name322", "name323"],
      31: ["name331", "name332", "name333"],
    },
  },
};

let year = 2019;
let month = 12;
let day = 29;

console.log(affairs[year][month][day]);
