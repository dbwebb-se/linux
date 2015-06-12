/**
 * HTTP server returning uptime.
 */

var http = require('http');
var child = require('child_process');

var server = http.createServer(function (req, res) {

    // Execute a child process, in this case 'uptime'.
    child.exec('uptime', function (error, stdout, stderr) {
        if (error || stderr) {
            // Do something with the error(s)
            console.log('Something went wrong...', error, stderr)
        }

        // Write the result of standard output as plain text.
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(stdout);
    });

}).listen(1337);


export default server;