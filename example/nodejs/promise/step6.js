"use strict";

const http = require('./httpgetjson');

const url1 = "https://jsonplaceholder.typicode.com/posts/6";
const url2 = "https://jsonplaceholder.typicode.com/posts/6";

const promises = [http.getJsonAsPromise(url1), http.getJsonAsPromise(url2)]

Promise.all(promises)
.then(data => {
    console.log(">>> NORMAL EXECUTION CONTINUES A1");
    console.log(JSON.parse(data));
})
.then(data => {
    console.log(data);
    console.log(">>> NORMAL EXECUTION CONTINUES A2");
})
.catch(err => {
    console.log("FAILED:" + err);
});
