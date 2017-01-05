/**
 * Main program to run a simple server that says Hello World.
 *
 */
"use strict";

import server from './jsonServer.js';

// Start the server to listen on a port
server.listen(1337);

console.log("Simple server replying with JSON object listen on port 1337.");
