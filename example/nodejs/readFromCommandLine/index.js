/**
 * Execute this project by:
 * $ babel-node -- index.js
 */
"use strict";

var usage = 'Read passed parameters to the script.\n' +
            'Just simply add arguments to the script' +
            'like this: $ babel-node index.js kalle anka ...';

console.log(usage);

console.log('All arguments passed. Note. that "node" and ' +
            'the "file" is also included.');

console.log('All arguments as an array: \n', process.argv);

// Save the passed arguments
var argumentsArray = process.argv;

// You can index on the arguments just like any other array
var last = argumentsArray[argumentsArray.length - 1];

console.log('Last passed argument: ', last);
