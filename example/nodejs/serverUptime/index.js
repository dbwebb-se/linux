/**
 * Main program to run a simple server that says Hello World.
 *
 */
"use strict";

import server from './serverUptime.js';

// Start the server to listen on a port
server.listen(1337);

console.log("Simple server replying with output of command uptime, listen on port 1337.");
