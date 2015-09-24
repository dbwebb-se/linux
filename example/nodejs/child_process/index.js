/**
 * Testprogram for child process and taking care of its output.
 * You need a version of Node 0.12 or later to use synchronous exec.
 * 
 */
var url = "https://strongloop.com/strongblog/whats-new-in-node-js-v0-12-execsync-a-synchronous-api-for-child-processes/";

var child = require('child_process');
 
child.exec('uptime', (error, stdout, stderr) => {
  var a = stdout;
  console.log("Async uptime: " + a);
});

try {
    var b = child.execSync("uptime");
    console.log(b);
} catch (e) {
    console.log(e);
    console.log("ERROR: Seems like you have no support for synchronous child processes. Read more on\n" + url);
}
