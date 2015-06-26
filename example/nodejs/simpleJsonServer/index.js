/**
 * Main program to run a simple server that says Hello World.
 *
 */
import server from './json-server.js';

// Start the server to listen on a port
server.listen(1337);
console.log("Simple server replying with JSON object listen on port 1337.");
