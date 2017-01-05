/**
 *
 */
"use strict";

var fs = require('fs');

// Reads the current directory
var files = fs.readdirSync(__dirname);

// Loops through the array of filename and prints them
for (var i = 0; i < files.length; i += 1) {
    console.log(files[i]);
}

/**
 *  Read a file and print the content in the console
 */
// Reads an utf-8 encoded file
var fileContent = fs.readFileSync('./data.txt', 'utf8');

// Print the content to console
console.log(fileContent);
