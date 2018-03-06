"use strict";

const https = require('./httpget');

//const url = "https://dbwebb.se/";
const url = "https://dbwebb.se/humans.txt";




https.httpGetNoPromise(url, (data) => {
    console.log(">>> NORMAL EXECUTION CONTINUES A1");
    console.log(data);

    https.httpGetNoPromise(url, (data) => {
        console.log(">>> NORMAL EXECUTION CONTINUES A2");
        console.log(data);
    });
});




https.httpGetAsPromise(url)
    .then(data => {
        console.log(">>> NORMAL EXECUTION CONTINUES B1");
        console.log(data);

        return https.httpGetAsPromise(url);
    })
    .then(data => {
        console.log(">>> NORMAL EXECUTION CONTINUES B2");
        console.log(data);
    })
    .catch(err => {
        console.log("FAILED:" + err);
    });
