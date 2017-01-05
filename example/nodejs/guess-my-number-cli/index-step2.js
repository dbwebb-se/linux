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
askQuestion("Take a guess");
