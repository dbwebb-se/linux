/**
 * Server with routes..
 */

/*
    URLS:
    localhost:1337/ - home.
    localhost:1337about - about page.
    localhost:1337/* - 404 page.
 */


var url = require('url');
var http = require('http');


// Create the server.
http.createServer(function (req, res) {

    // Get the path from the requested URL.
    var path = url.parse(req.url).pathname;

    // Switch on the path.
    switch (path) {
        // Home page route.
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Home page');
        break;

        // About page route.
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('About');
        break;

        // Not found route.
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('No route matching...');
        break;

    }

}).listen(1337);
