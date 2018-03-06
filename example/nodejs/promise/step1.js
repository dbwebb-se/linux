"use strict";

const https = require('https');


// https://nodejs.org/api/https.html#https_https_get_options_callback
https.get('https://dbwebb.se/humans.txt', (res) => {
    let data = "";

    // Got the headers from the initial request
    console.log("\n>>> GOT HTTP HEADERS");
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    // A chunk of data has been recieved.
    res.on('data', (chunk) => {
        console.log("\n>>> GOT A CHUNK");
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    res.on('end', () => {
        console.log("\n>>> ALL DATA IS RECEIVED");
        console.log(data);
        console.log("\n>>> NOW I CAN PROCESS DATA");
        //console.log(">>> NORMAL EXECUTION CONTINUES");
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});

console.log(">>> NORMAL EXECUTION CONTINUES");
