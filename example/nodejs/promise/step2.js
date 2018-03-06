"use strict";

const https = require('https');


function httpGetNoPromise(url, callback) {
    https.get(url, (res) => {
        var data = "";

        // Got the headers from the initial request
        console.log("\n>>> GOT HTTP HEADERS");
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);

        res.on('data', (chunk) => {
            console.log("\n>>> GOT A CHUNK");
            data += chunk;
        });

        res.on('end', () => {
            if (res.statusCode === 200) {
                console.log("\n>>> GOT 200 READY");
                callback(data);
            }
        });

        res.on('error', (e) => {
            console.log("ERROR" + e);
        });
    });
}


httpGetNoPromise('https://dbwebb.se/humans.txt', (data) => {
    console.log(">>> NORMAL EXECUTION CONTINUES");
    console.log(data);
});
