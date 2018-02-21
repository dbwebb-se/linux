"use strict";

const https = require('https');


// // https://nodejs.org/api/https.html#https_https_get_options_callback
// https.get('https://dbwebb.se/', (res) => {
//     let data = '';
// 
//     // Got the headers from the initial request
//     console.log("\n>>> GOT HTTP HEADERS")
//     console.log('statusCode:', res.statusCode);
//     console.log('headers:', res.headers);
// 
//     // A chunk of data has been recieved.
//     res.on('data', (chunk) => {
//         console.log("\n>>> GOT A CHUNK")
//         data += chunk;
//     });
// 
//     // The whole response has been received. Print out the result.
//     res.on('end', () => {
//         console.log("\n>>> ALL DATA IS RECEIVED")
//         //console.log(data);
//         console.log("\n>>> NOW I CAN PROCESS DATA")
// 
//         //console.log(">>> NORMAL EXECUTION CONTINUES");
//     });
// 
// }).on("error", (err) => {
//     console.log("Error: " + err.message);
// });
// 
// 
// 
// console.log(">>> NORMAL EXECUTION CONTINUES");



function httpGetAsPromise(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            var data = "";

            // Got the headers from the initial request
            console.log("\n>>> GOT HTTP HEADERS")
            console.log('statusCode:', res.statusCode);
            console.log('headers:', res.headers);

            res.on('data', (chunk) => {
                console.log("\n>>> GOT A CHUNK")
                data += chunk;
            });

            res.on('end', () => {
                if (res.statusCode === 200) {
                    console.log("\n>>> GOT 200 READY")
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


// httpGetAsPromise('https://dbwebb.se/')
// .then(data => {
//     console.log(">>> NORMAL EXECUTION CONTINUES");
//     //console.log(data);
// })
// .catch(err => {
//     console.log("FAILED:" + err);
// });


// -------------------------------------------------


function httpGetNoPromise(url, callback) {
    https.get(url, (res) => {
        var data = "";

        // Got the headers from the initial request
        console.log("\n>>> GOT HTTP HEADERS")
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);

        res.on('data', (chunk) => {
            console.log("\n>>> GOT A CHUNK")
            data += chunk;
        });

        res.on('end', () => {
            if (res.statusCode === 200) {
                console.log("\n>>> GOT 200 READY")
                // resolve(data);
                callback(data);
            } else {
                //reject(data);
            }
        });

        res.on('error', (e) => {
            //reject("Got error: " + e.message);
            console.log("ERROR" + e);
        });
    });
}


httpGetNoPromise('https://dbwebb.se/', (data) => {
    console.log(">>> NORMAL EXECUTION CONTINUES");
    //console.log(data);
});
