"use strict";

const http = require('./httpgetjson');

const url1 = "https://api.icndb.com/jokes/random?escape=javascript";
const url2 = "https://api.icndb.com/jokes/random?escape=javascript";

const promises = [http.getJsonAsPromise(url1), http.getJsonAsPromise(url2)]

Promise.all(promises)
// .then(data => console.log(data))
.then(data => {
    console.log("First handler...");
    console.log(data[0]);
    return data.map(item => JSON.parse(item).value.joke);
})
.then(data => {
    console.log("Second handler...");
    console.log(data);
})
// .then(data => JSON.parse(data))
    // console.log(data.json());
    // console.log(">>> NORMAL EXECUTION CONTINUES A1");


// .then(data => {
//     console.log(">>> NORMAL EXECUTION CONTINUES A2");
// })
.catch(err => {
    console.log("FAILED:" + err);
});
