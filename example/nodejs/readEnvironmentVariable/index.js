/**
 * Read environment variable and show its value, if its defined.
 */
"use strict";

console.log(process.env.LINUX_PORT);

if ('LINUX_PORT' in process.env) {
    console.log(`LINUX_PORT is set to '${process.env.LINUX_PORT}'`);
}
else {
    console.log("LINUX_PORT is not set.");
}
