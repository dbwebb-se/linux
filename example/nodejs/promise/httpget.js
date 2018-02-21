/**
 * Functions for http get, with or without promise.
 */
"use strict";



/**
 * Make a HTTP GET request, wrapped in a Promise.
 *
 * @param  String url to connect to.
 *
 * @return Promise
 *
 */
httpGetAsCallback(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            var data = "";

            res.on('data', (chunk) => {
                data += chunk;
            }).on('end', () => {
                if (res.statusCode === 200) {
                    resolve(data);
                } else {
                    reject(data);
                }
            }).on('error', (e) => {
                reject("Got error: " + e.message);
            });
        });
    });
}



/**
 * Make a HTTP GET request, wrapped in a Promise.
 *
 * @param  String url to connect to.
 *
 * @return Promise
 *
 */
httpGetAsPromise(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            var data = "";

            res.on('data', (chunk) => {
                data += chunk;
            }).on('end', () => {
                if (res.statusCode === 200) {
                    resolve(data);
                } else {
                    reject(data);
                }
            }).on('error', (e) => {
                reject("Got error: " + e.message);
            });
        });
    });
}
