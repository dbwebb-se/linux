/**
 * Main program for the a game of Gomoku.
 */
"use strict";

var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var min = 1;
var max = 10;
var number = Math.floor((Math.random() * max) + min);



/**
 * Guessing game asking question.
 *
 * @param String question to ask
 */
function askQuestion(question) {
    rl.question(question + "\n", (answer) => {
        if (answer < number) {
            askQuestion("Too low, Guess again!");
        } else if (answer > number) {
            askQuestion("Too high, Guess again!");
        } else {
            rl.write("Well done! The answer was " + answer + "!\n");
            rl.close();
            process.exit(0);
        }
    });
}



/**
 * Here comes the actual main-program.
 */
console.log("I am thinking of a number between " + min + " and " + max);
askQuestion("Take a guess");
