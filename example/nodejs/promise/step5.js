"use strict";

const http = require('./httpgetjson');

const url = "https://api.icndb.com/jokes/random?escape=javascript";

const promises = [http.getJsonAsPromise(url), http.getJsonAsPromise(url)];

Promise.all(promises)
    .then(data => {
        console.log("First handler...");
        // Return each joke from the JSON response
        return data.map(item => JSON.parse(item).value.joke);
    })
    .then(data => {
        console.log("Second handler...");
        console.log(data);
    })
    .catch(err => {
        console.log("FAILED:" + err);
    });
