/**
 * Main program to run a simple server that says Hello World.
 *
 */
"use strict";

import server from './serverReadFile.js';

// Start the server to listen on a port
server.listen(1337);

console.log("Simple server, listen on port 1337.");
console.log(" / for instructions.");
console.log(" /file1 for content of file1, read synchronously.");
console.log(" /file2 for content of file2, read asynchronously.");
