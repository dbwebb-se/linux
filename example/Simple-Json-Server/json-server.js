/**
 * Simple HTTP server returing JSON to the client.
 */

// Require the node HTTP-module
var http = require('http');

// The object that later will be sent to via the response
var data = {
    'text':'Hello World'
};


var server = http.createServer((req, res) => {
    // Write to the header with application/json as content type and 200 HTTP status code.
    res.writeHead(200, {'Content-Type': 'application/json'});

    // Converts the Javascript-object to a string to be sent to the client
    var jsonObj = JSON.stringify(data);
    // End the respons with the new string
    res.end(jsonObj);

}).listen(1337);


// Export the server.. (not needed)
export default server;
