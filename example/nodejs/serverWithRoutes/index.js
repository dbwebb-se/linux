/**
 * Main program to run a simple server that says Hello World.
 *
 */
import server from './server-with-routes.js';

// Start the server to listen on a port
server.listen(1337);
console.log("Simple server with routes listen on port 1337. Try / and /about and /whatever");
