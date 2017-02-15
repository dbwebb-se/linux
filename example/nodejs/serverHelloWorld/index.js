/**
 * Main program to run a simple server that says Hello World.
 *
 */
"use strict";

// Get the module for http and store it in a variable
var http = require("http");

// Use the variable to create a server.
// The server executes the function for each request it receives.
http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
}).listen(1337);

console.log("Server running at http://127.0.0.1:1337/");
