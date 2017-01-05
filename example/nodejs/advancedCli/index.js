#!/usr/bin/env node

"use strict";



/**
 * Prints the usage of the command interface
 */
function usage() {
    console.log('');
    console.log('Usage: [options]');
    console.log('');
    console.log('-h, --help \tGives some commands');
    console.log('-v, --version\tDisplays the version');
    console.log('-s, --start\tStarts something nice');
    console.log('--about \tShow text about this program');
    console.log('');
}

// Check if there is missing arguments
if (process.argv.length <= 2) {
    console.log('Missing arguments');
    usage();
    // Exist the process if there are no arguments
    process.exit(0);
}

// Removes the first two values in the incomming
// arguments eg. filename and "enviroment"
process.argv.slice(2).forEach(function(arg) {
    // Switch on given argument
    switch (arg) {
        case '-v':
        case '--version':
            console.log('v1.0.0');
            break;
        case '-s':
        case '--start':
            console.log('starting stuff');
            break;
        case '--about':
            console.log('This is some about text');
            break;
        case '-h':
        case '--help':
            usage();
            break;
        default:
            // Print usage
            console.log('`' + arg + '` don\'t match any valid arguments');
            break;
    }
});

// Make sure that the process is kill also
process.on('exit', function(code, signal) {
    if (signal) {
        process.kill(process.pid, signal);
    } else {
        process.exit(code);
    }
});
