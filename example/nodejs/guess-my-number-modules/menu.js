/**
 * Module menu to to ease constructing a CLI program.
 */
"use strict";

const readline = require("readline");

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const game = require("./game");



/**
 * Init what can be initiated and start up the mainloop.
 */
var mainloop = (optarg) => {
    var prompt = optarg.opts.prompt || "Guess my number$ ";

    game.init(optarg);

    readlineInterface.setPrompt(prompt);
    readlineInterface.prompt();
};



/**
 * Display a menu.
 */
var menu = () => {
    console.log(`Use any of the commands: random, hint, menu, exit.
Or enter a number to take a guess.`);
};



/**
 * Display a menu.
 */
var exitMainloop = () => {
    console.log("Bye!");
    process.exit(0);
};



/**
 * Callbacks for game asking question.
 */
readlineInterface.on("line", (line) => {
    switch (line.trim()) {
        case "exit":
            exitMainloop();
            break;

        case "menu":
            menu();
            break;

        case "hint":
            game.hint();
            break;

        case "random":
            game.random();
            break;

        default:
            game.makeGuess(parseInt(line, 10));
    }
    readlineInterface.prompt();
});



/**
 * Callback on closing.
 */
readlineInterface.on("close", exitMainloop);



// Export module
module.exports = {
    mainloop: mainloop
};
