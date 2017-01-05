/**
 * Here we extend the simple-routing with reading the file on a GET-request
 * and create a file with a POST-request.
 */
"use strict";

/*
 * To able to talk with the file system we require the fs-modul
 */
var fs = require('fs');

/*/
 * We want to create a webservice so we need the http, url, querystring
 * and url - modul.
 */
var queryString = require('querystring');
var http        = require('http');
var url         = require('url');

http.createServer((req, res) => {
    // Get the path
    var path = url.parse(req.url).pathname;

    console.log('[' + req.method + '] ' + path);

    switch (path) {
        /**
         * Base route.
         * Support both POST and GET-requests
         *
         * It either serve JSON data via a GET-request or
         * it saves new data via a POST-request
         */
        case '/':
            // Checks the request method that been sent to us
            if (req.method == 'POST') { // Post request. Client want to create new data
                // The full body send from the client
                var rawBody = '';
                // Reads the data from client
                req.on('data', (chunk) => {
                    rawBody += chunk;
                });

                // This is called when the data is finished reading
                req.on('end', () => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    // Parses the rawBody
                    var deCodededBody = queryString.parse(rawBody);

                    // Convert the decodedbody to a string
                    var jsonToSave = JSON.stringify(deCodededBody);

                    // Sunchronously creates a new file and writes to it
                    fs.writeFileSync('data.json', jsonToSave);

                    // Writes a "nice" html response to the user
                    res.write('<html><head><title>File saved</title></head><body>');
                    res.write('<h1>Data saved!</h1>');
                    res.write('<p>To view the saved data open "data.json"</p>');
                    res.write('<p>Or just click <a href="/">here</a> (This sends a GET-request to the browser and gives you the file that you just saved!)</p> ');
                    res.write('</body></html>');
                    res.end();
                });
            } else { // it's a get request and the client request the content
                try {
                    res.writeHead(200, { 'Content-Type': 'application/json' });

                    // Reads the myData.json file and saves it in data
                    var data = fs.readFileSync('myData.json', 'utf8');

                    // Note that we don't have to stringify it since the file is a string already and NOT an object
                    res.end(data);
                } catch (e) {
                    // Filed didn't exist yet. Let's tell the client
                    if (e.code === 'ENOENT') {
                        res.writeHead(404, { 'Content-Type': 'plain/text' });
                        res.end('File not found. Hint; Do a POST-request on this route first');
                    } else {
                        // Some other error. Best to tell client and throw the error
                        res.writeHead(500, { 'Content-Type': 'plain/text' });
                        res.end('500 Internal Server Error');
                        throw e;
                    }
                }
            }
            break;

        /**
         * Async reading of a file and return it to the client.
         */
        case '/async':
            fs.readFile('myData.json', 'utf8', (err, data) => {
                // If readFile got an error we throw it
                if (err) {
                    // Sends to the client that the server failed
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal server error');
                    // throws the error
                    throw err;
                }
                // Sends the data to the client
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            });
            break;

        /**
         * Not found route.
         */
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('No route matching...');
            break;

    }

}).listen(1337);
