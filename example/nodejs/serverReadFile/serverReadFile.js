/**
 * HTTP server returning contents of files, read synchrnously or asynchronously.
 */
"use strict";

var http = require('http');

// To parse the route from the url
var url = require('url');

// To able to talk with the file system we require the fs-modul
var fs = require('fs');

var server = http.createServer((req, res) => {

    var ipAddress,
        route,
        filename,
        data;

    // Log incoming requests
    ipAddress = req.connection.remoteAddress;

    // Check what route is requested
    route = url.parse(req.url).pathname;
    console.log("Incoming route " + route + " from ip " + ipAddress);

    // Check route and proceed accordingly
    if (route == '/file1') {
        // Read file1.txt using synchronous method
        filename = 'file1.txt';
        data = fs.readFileSync(filename, 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);

    } else if (route == '/file2') {
        // Read file2.txt using synchronous method
        filename = 'file2.txt';

        fs.readFile(filename, 'utf8', (err, data) => {
            // If readFile got an error we throw it
            if (err) {
                // Sends to the client that the server failed
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal server error');
                console.log('Internal server error');
                throw err;
            }

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        });

    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Use /file1 (sync) or /file2 (async).\n");
    }
});

export default server;
