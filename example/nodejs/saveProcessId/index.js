/**
 * Main program to run a simple server that says Hello World.
 *
 */
"use strict";

var fs = require('fs');
import server from './server.js';

// Start the server to listen on a port
server.listen(1337);

fs.writeFile("pid", process.pid, function(err) {
    if (err) {
        return console.log(err);
    }

    console.log("Wrote process id to file 'pid'");
});

console.log("Simple server listen on port 1337 with process id " + process.pid);
