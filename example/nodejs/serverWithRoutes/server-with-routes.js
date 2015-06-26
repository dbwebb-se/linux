/**
 * Server with routes.
 * URLS:
 *  localhost:1337/     - home.
 *  localhost:1337about - about page.
 *  localhost:1337/*    - 404 page.
 */

var url = require('url');
var http = require('http');


var server = http.createServer((req, res) => {

    var ipAddress,
        path;
        
    // Get the path for the requested URL.
    path = url.parse(req.url).pathname;

    // Log incoming requests
    ipAddress = req.connection.remoteAddress;
    console.log("Incoming request from ip " + ipAddress + " for " + path);
    
    // Switch (route) on the path.
    switch (path) {
        // Home page route.
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Home page\n');
        break;

        // About page route.
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('About\n');
        break;

        // Not found route.
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404. No route matching.\n');
        break;

    }
});

// Export the server as a module.
export default server;
