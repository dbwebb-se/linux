/**
 * Main program to run a simple server that says Hello World.
 *
 */
"use strict";

const server = require("./serverDecode.js");

// Start the server to listen on a port
server.listen(1337);

console.log('Server listen on port 1337.');
console.log('Doing proper encoding of url. Try the url "/PelleM%C3%A5nsson" or /PelleMånsson');
