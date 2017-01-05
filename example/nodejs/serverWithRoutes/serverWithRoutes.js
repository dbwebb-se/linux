/**
 * Server with routes.
 * URLS:
 *  localhost:1337/     - home.
 *  localhost:1337/about - about page.
 *  localhost:1337/*    - 404 page.
 */
"use strict";

var http = require('http');
var url = require('url');


var server = http.createServer((req, res) => {

    var ipAddress,
        route;

    // Log incoming requests
    ipAddress = req.connection.remoteAddress;

    // Check what route is requested
    route = url.parse(req.url).pathname;
    console.log("Incoming route " + route + " from ip " + ipAddress);


    // Switch (route) on the path.
    switch (route) {
        case '/':
            // Home page route.
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Home page\n');
        break;

        case '/about':
            // About page route.
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('About\n');
        break;

        default:
            // Not found route.
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404. No route matching.\n');
        break;
    }
});

// Export the server as a module.
export default server;
