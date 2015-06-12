/**
 * Simple HTTP server returning Hello World as plain text.
 */

// Require the node HTTP.
var http = require('http');

// Use the createServer function to create the simple server..
var server = http.createServer((req, res) => {
    // Write to the header with text/plain as content type and 200 HTTP status code.
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // End the response with Hello World.
    res.end('Hello World');

}).listen(1337); // Listen to the server on port 1337.

console.log('Server running at localhost:1337');

// Export the server.. (not needed)
export default server;
