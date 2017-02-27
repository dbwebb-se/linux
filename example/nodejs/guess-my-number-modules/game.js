/**
 * Module game to make a guessing the number game.
 */
"use strict";

var min = 1;
var max = 10;
var number;

// Module to export
var game = {};



/**
 * Init the game.
 */
game.init = (optarg) => {
    var args = optarg.args;

    console.log("Starting up game with options/arguments:");
    console.log(optarg);

    // Check if there is remaining arguments
    // that should be used for min and max
    if (args.length >= 2) {
        min = parseInt(args[0], 10);
        max = parseInt(args[1], 10);
    } else if (args.length === 1) {
        min = parseInt(args[0], 10);
    }

    console.log(`Using numbers between ${min} - ${max}.`);

    number = Math.floor((Math.random() * (max - min)) + min);
};



/**
 * Show a hint.
 */
game.hint = () => {
    console.log("I am thinking of the number " + number);
};



/**
 * Guess another number.
 */
game.random = () => {
    number = Math.floor((Math.random() * (max - min)) + min);
    console.log(`I changed the number and is now thinking an another one between ${min} - ${max}.`);
};



/**
* Take a guess.
*
* @param Integer answer a the number to guess.
*/
game.makeGuess = (answer) => {
    if (!Number.isInteger(answer)) {
        console.log("Not a integer.");
        return;
    }

    if (answer < number) {
        console.log("Too low, Guess again!");
    } else if (answer > number) {
        console.log("Too high, Guess again!");
    } else {
        console.log("Well done! The answer was " + answer + "!");
    }
};



// Export module
module.exports = game;
