/**
 * Main program to run a simple server that says Hello World.
 *
 */
"use strict";

const path = require("path");
const fs = require("fs");
//import server from "./server.js";
const server = require("./server.js");


// Start the server to listen on a port
server.listen(1337);

// Write pid to file
var pidFile = path.join(__dirname, "pid");
fs.writeFile(pidFile, process.pid, function(err) {
    if (err) {
        return console.log(err);
    }

    console.log("Wrote process id to file 'pid'");
});

console.log("Simple server listen on port 1337 with process id " + process.pid);



/**
 * Listen on SIGINT, SIGTERM
 */
function controlledShutdown(signal) {
    console.warn(`Caught ${signal}. Removing pid-file and will then exit.`);
    fs.unlinkSync(pidFile);
    process.exit();
}

// Handle WIN32 signals in a specific mode
if (process.platform === "win32") {
    var rl = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on("SIGINT", function () {
        process.emit("SIGINT");
    });
}

// Add event handlers for signals
process.on("SIGTERM", () => { controlledShutdown("SIGTERM"); });
process.on("SIGINT", () => { controlledShutdown("SIGINT"); });
