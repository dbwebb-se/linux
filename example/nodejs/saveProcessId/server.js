/**
 * Simple HTTP server returning Hello World as plain text.
 */
"use strict";

// Require the module
var http = require('http');

// Use the createServer function to create the simple server
var server = http.createServer((req, res) => {

    var ipAddress;

    // Log incoming requests
    ipAddress = req.connection.remoteAddress;
    console.log("Incoming request from ip " + ipAddress);

    // Write header with text/plain as content type and 200 HTTP status code
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Reply with a string
    res.end('Hello World\n');
});

// Export the server as a module.
export default server;
