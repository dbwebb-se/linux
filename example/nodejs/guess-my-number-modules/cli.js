/**
 * Module cli to ease constructing a CLI program.
 */
"use strict";

const VERSION = "1.0.0";

const path = require("path");



// Module to export
var cli = {};



/**
 * Display helptext about usage of this script.
 */
var usage = () => {
    var scriptName = path.basename(process.argv[1]);

    console.log(`Usage: ${scriptName} [options] <min> <max>

Options:
 -h, --help       Display help text.
 -v, --version    Display the version.
 --prompt string  Use string as prompt.
`);
};



/**
 * Display short helptext about usage.
 */
var unknownOption = (option) => {
    console.log(`Unknown option: ${option}
Use --help to get an overview of the command.`);
};



/**
 * Display version.
 */
var version = () => {
    console.log(VERSION);
};



/**
 * Check incoming options.
 */
cli.checkOptionsArguments = () => {
    var args = process.argv.slice(2);
    var opts = {};
    var remaining = [];

    args.forEach((arg, index, array) => {
        switch (arg) {
            case "-h":
            case "--help":
                usage();
                process.exit(0);
                break;

            case "-v":
            case "--version":
                version();
                process.exit(0);
                break;

            case "--prompt":
                opts.prompt = array[index + 1];
                delete array[index + 1];
                break;

            default:
                if (arg.startsWith("-")) {
                    unknownOption(arg);
                    process.exit(1);
                }

                remaining.push(arg);
                break;
        }
    });

    return {
        opts: opts,
        args: remaining
    };
};



// Export module
module.exports = cli;
