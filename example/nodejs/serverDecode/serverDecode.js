/**
 * Server doing proper decoding of route part.
 */
"use strict";

const http = require("http");
const url = require("url");
//const qs = require("querystring");


var server = http.createServer((req, res) => {
    //var ipAddress;
    var urlParts;
    var route;
    //var query;
    //var queryString;

    // Log incoming requests
    //ipAddress = req.connection.remoteAddress;

    // Check what route is requested
    urlParts = url.parse(req.url, true);
    route = decodeURI(urlParts.pathname);
    //query = urlParts.query;
    //queryString = qs.stringify(query);

    console.log(`Incoming route:\nPure:    ${urlParts.pathname}\nDecoded: ${route}`);

    // Inspect the details of the object created for the query string
    //console.log(util.inspect(query));

    // Loop through all query variables
    /*Object.keys(query).forEach( key => {
        console.log(`"${key}" : "${query[key]}"`);
    });*/



    // Switch (route) on the path.
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf8" });
    res.end(`Got URL ${route} \n`);
});



// Export the server as a module.
module.exports = server;
