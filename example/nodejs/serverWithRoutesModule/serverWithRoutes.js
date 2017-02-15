/**
 * Server with routes.
 * URLS:
 *  localhost:1337/      - home.
 *  localhost:1337/about - about page.
 *  localhost:1337/*     - 404 page.
 */
"use strict";

const http = require("http");
const url = require("url");

// My handlers for each route is now within this module
//import routes from "./routes.js";
const routes = require("./routes.js");


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
        case "/":
            routes.home(res);
        break;

        case "/about":
            routes.about(res);
        break;

        default:
            routes.notFound(res);
        break;
    }
});

// Export the server as a module.
//export default server;
module.exports = server;
