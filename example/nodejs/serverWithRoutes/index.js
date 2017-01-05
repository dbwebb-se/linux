/**
 * Main program to run a simple server that says Hello World.
 *
 */
"use strict";

import server from './serverWithRoutes.js';

// Start the server to listen on a port
server.listen(1337);

console.log('Simple server with routes listen on port 1337.');
console.log('Try routes / and /about and /whatever');
