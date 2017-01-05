/**
 * Server with routes.
 * URLS:
 *  localhost:1337/     - home.
 *  localhost:1337/*    - 404 page.
 */
"use strict";

var http = require('http');
var url = require('url');
var qs = require('querystring');
var util = require('util');


var server = http.createServer((req, res) => {

    var ipAddress,
        urlParts,
        route,
        query,
        queryString;

    // Log incoming requests
    ipAddress = req.connection.remoteAddress;

    // Check what route is requested
    urlParts = url.parse(req.url, true);
    route = urlParts.pathname;
    query = urlParts.query;
    queryString = qs.stringify(query);

    console.log("Incoming route " + route + " from ip " + ipAddress + " with querystring " + queryString);


    // Inspect the details of the object created for the query string
    console.log(util.inspect(query));

    // Loop through all query variables
    Object.keys(query).forEach( key => {
        console.log(`'${key}' : '${query[key]}'`);
    });



    // Switch (route) on the path.
    switch (route) {
        case '/':
            // Home page route.
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Home page\n');
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
