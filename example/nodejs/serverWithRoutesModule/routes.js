/**
 * Put each route in its own function.
 *
 */
"use strict";

var routes = {};


/**
 * Home route
 */
routes.home = (res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page\n");
};



/**
 * About route.
 */
routes.about = (res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About\n");
};



/**
 * Not Found route.
 */
routes.notFound = (res) => {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404. No route matching.\n");
};



// Export as a module
//export default routes;
module.exports = routes;
