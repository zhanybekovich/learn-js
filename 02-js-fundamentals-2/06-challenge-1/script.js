"use strict";

/**
 * Two gymnastic teams, the Dolphins and the Koalas. Each team competes 3 times, and then the average of the 3 scores is calculated. A team only wins if it has at least double the average score of the other team.
 *
 * Tasks:
 * 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
 * 2. Use the function to calculate the average for both teams
 * 3. Create a function 'checkWinner' that takes the average score fo each team as params and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 14)"
 */

const calAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (dolphins, koalas) => {
  if (dolphins >= koalas * 2) {
    console.log(`Dolphins win (${dolphins} vs. ${koalas})`);
  } else if (koalas >= dolphins * 2) {
    console.log(`Koalas win (${koalas} vs. ${dolphins})`);
  } else {
    console.log("There is no a winner");
  }
};

const dolphins = calAverage(126, 146, 140);
const koalas = calAverage(65, 54, 49);

checkWinner(dolphins, koalas);
