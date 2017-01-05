/**
 * HTTP server returning uptime.
 */
"use strict";

var http = require('http');
var child = require('child_process');

var server = http.createServer((req, res) => {

    var ipAddress;

    // Log incoming requests
    ipAddress = req.connection.remoteAddress;
    console.log("Incoming request from ip " + ipAddress);

    // Execute a child process, in this case 'uptime'.
    child.exec('uptime', (error, stdout, stderr) => {
        if (error || stderr) {
            // Do something with the error(s)
            console.log('Something went wrong...', error, stderr);
        }

        // Write the result of standard output as plain text.
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(stdout);
    });
});

export default server;
