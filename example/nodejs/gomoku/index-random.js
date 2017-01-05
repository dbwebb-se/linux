/**
 * Main program for the a game of Gomoku.
 */
"use strict";

import GomokuBoard from "./GomokuBoard.js";


var size = 20,
    prompt = "Gomoku$ ",
    gameBoard;

gameBoard = new GomokuBoard();



var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



/**
 * Returns a random integer between min (included) and max (included)
 * Using Math.round() will give you a non-uniform distribution!
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



/**
 * Place a marker on the board.
 */
function placeMarker() {
    var x, y,
        player = gameBoard.playerInTurn();

    while (!gameBoard.isFull()) {
        x = getRandomIntInclusive(0, size);
        y = getRandomIntInclusive(0, size);

        if (!gameBoard.isPositionTaken(x, y)) {
            break;
        }
    }

    gameBoard.place(x, y);
    console.log(">>> " + player + " places " + x + " " + y + "\n");
    console.log(gameBoard.asAscii());
}



rl.on("line", function(line) {
    switch (line.trim()) {
        case "exit":
            console.log("Bye!");
            process.exit(0);
            break;
        default:
            placeMarker();
    }
    rl.prompt();
});



rl.on("close", function() {
    rl.write("Bye!");
    process.exit(0);
});



// Here starts the actual main program
console.log(">>> Start the game with board size of " + size);
gameBoard.start(size);

rl.setPrompt(prompt);
rl.prompt();
