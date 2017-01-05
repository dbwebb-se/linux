#!/usr/bin/env babel-node

/**
 * Main program to run the Gomoku server
 *
 */
"use strict";

const VERSION = "1.0.0";

// For CLI usage
var path = require("path");
var scriptName = path.basename(process.argv[1]);
var args = process.argv.slice(2);
var arg;



// Get the server with defaults
import GomokuClient from "./GomokuClient.js";

var gomoku = new GomokuClient();
var server = "http://localhost:1337";



// Make it using prompt
var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



/**
 * Display helptext about usage of this script.
 */
function usage() {
    console.log(`Usage: ${scriptName} [options]

Options:
 -h               Display help text.
 -v               Display the version.
 --server <url>   Set the server url to use.`);
}



/**
 * Display helptext about bad usage.
 *
 * @param String message to display.
 */
function badUsage(message) {
    console.log(`${message}
Use -h to get an overview of the command.`);
}



/**
 * Display version.
 */
function version() {
    console.log(VERSION);
}



// Walkthrough all arguments checking for options.
while ((arg = args.shift()) !== undefined) {
    switch (arg) {
        case "-h":
            usage();
            process.exit(0);
            break;

        case "-v":
            version();
            process.exit(0);
            break;

        case "--server":
            server = args.shift();
            if (server === undefined) {
                badUsage("--server must be followed by a url.");
                process.exit(1);
            }
            break;

        default:
            badUsage("Unknown argument.");
            process.exit(1);
            break;
    }
}



/**
 * Display a menu.
 */
function menu() {
    console.log(`Commands available:
 exit            Leave this program.
 menu            Print this menu.
 start [size]    Prepare to start a game.
 view            View the gamoboard.
 place <x> <y>   Place a marker.
 url             get url to view game in browser.`);
}



/**
 * Callbacks for game asking question.
 */
rl.on("line", function(line) {
    // Split incoming line with arguments into an array
    var args = line.trim().split(" ");
    args = args.filter(value => {
        return value !== "";
    });

    switch (args[0]) {
        case "exit":
            console.log("Bye!");
            process.exit(0);
            break;

        case "menu":
            menu();
            rl.prompt();
            break;

        case "start":
            var size = args[1] || 20;

            gomoku.start(size)
            .then(value => {
                console.log(value);
                rl.prompt();
            })
            .catch(err => {
                console.log("FAILED: Could not start the game.\nDetails: " + err);
                rl.prompt();
            });
            break;

        case "view":
            gomoku.view()
            .then(value => {
                console.log(value);
                rl.prompt();
            })
            .catch(err => {
                console.log("FAILED: Could not view the game.\nDetails: " + err);
                rl.prompt();
            });
            break;

        case "place":
            var x = args[1];
            var y = args[2];

            gomoku.place(x, y)
            .then(value => {
                console.log(value);
                rl.prompt();
            })
            .catch(err => {
                console.log("FAILED: Could not place the marker.\nDetails: " + err);
                rl.prompt();
            });
            break;

        case "url":
            console.log("Click this url to view the game in a browser.\n" + server + "/view/ascii");
            rl.prompt();
            break;

        default:
            console.log("Enter 'menu' to get an overview of what you can do here.");
            rl.prompt();
    }
});



rl.on("close", function() {
    console.log("Bye!");
    process.exit(0);
});



// Main
gomoku.setServer(server);
console.log("Use -h to get a list of options to start this program.");
console.log("Ready to talk to server url '" + server + "'.");
console.log("Use 'menu' to get a list of commands.");
rl.setPrompt("Gomoku$ ");
rl.prompt();
