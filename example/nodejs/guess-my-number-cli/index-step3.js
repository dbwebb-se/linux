#!/usr/bin/env babel-node

"use strict";

const VERSION = "1.0.0";

var path = require('path');
var scriptName = path.basename(process.argv[1]);
var args = process.argv.slice(2);

var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var min = 1;
var max = 10;
var number;



/**
 * Display helptext about usage of this script.
 */
function usage() {
    console.log(`Usage: ${scriptName} [options] <min> <max>

Options:
 -h        Display help text.
 -v        Display the version.`);
}



/**
 * Display version.
 */
function version() {
    console.log(VERSION);
}



/**
 * Display a menu.
 */
function menu() {
    console.log(`Use any of the commands: random, hint, menu, exit, hello, version.
Or enter a number to take a guess.`);
}



/**
* Take a guess.
*
* @param Integer answer a the number to guess.
*/

function makeGuess(answer) {
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
}



/**
 * Callbacks for game asking question.
 */
rl.on("line", function(line) {
    switch (line.trim()) {
        case "exit":
            console.log("Bye!");
            process.exit(0);
            break;
        case "hello":
            console.log("Hello to you!");
            break;
        case "menu":
            menu();
            break;
        case "version":
            version();
            break;
        case "hint":
            console.log("I was thinking of the number " + number);
            break;
        case "random":
            number = Math.floor((Math.random() * max) + min);
            console.log("I changed the number and is now thinking an another one.");
            break;
        default:
            makeGuess(parseInt(line, 10));
    }
    rl.prompt();
});

rl.on("close", function() {
    console.log("Bye!");
    process.exit(0);
});



// Walkthrough all arguments checking for options.
var remaining = [];
args.forEach((arg) => {
    switch (arg) {
        case '-h':
            usage();
            process.exit(0);
            break;

        case '-v':
            version();
            process.exit(0);
            break;

        default:
            remaining.push(arg);
            break;
    }
});



// Check if there is remaining arguments that should be used for min and max
if (remaining.length >= 2) {
    min = parseInt(remaining[0], 10);
    max = parseInt(remaining[1], 10);
} else if (remaining.length === 1) {
    min = parseInt(remaining[0], 10);
}

number = Math.floor((Math.random() * max) + min);



/**
 * Here comes the actual main-program.
 */
console.log("I am thinking of a number between " + min + " and " + max);
rl.setPrompt("Guess my number$ ");
rl.prompt();
