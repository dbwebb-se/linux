/**
 * Functions for http get, with or without promise.
 */
"use strict";

const https = require('https');

module.exports = {
    httpGetNoPromise: httpGetNoPromise,
    httpGetAsPromise: httpGetAsPromise
};

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



function httpGetAsPromise(url) {
    return new Promise((resolve, reject) => {
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
                    resolve(data);
                } else {
                    reject(data);
                }
            });

            res.on('error', (e) => {
                reject("Got error: " + e.message);
            });
        });
    });
}
