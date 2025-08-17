/**
 * There are 2 gymnastic teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
 *
 * Tasks:
 * 1. Calculate the average score for each team, using the test data below.
 * 2. Compare the teams's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
 */

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins with the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas with the trophy 🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both with the trophy 🏆");
} else {
  console.log("No one wins the trophy");
}
