/**
 * To run this file you need to have these installed globaly:
 * npm install -g babel
 *
 * Then run this command:
 * babel-node -- index.js
 */

var url  = require('url');
var http = require('http');
var fs   = require('fs');
var queryObject;

var code = 200;

/**
 * Wrapper function for sending a response
 * @param  Object        resObj  The response object
 * @param  Object/String content What should be written to the response
 * @param  Integer       code    HTTP status code
 * @param  String        type    Content-Type of the response
 */
function sendResponse(resObj, content, code = 200, type = 'json') {
    var contentType = null;
    switch (type) {
        default:
        case 'json':
            contentType = { 'Content-Type': 'application/json' };
            content = JSON.stringify(content);
            break;
        case 'plain':
            contentType = { 'Content-Type': 'text/plain' };
            break;
        case 'html':
            contentType = { 'Content-Type': 'text/html' };
            break;
        case 'zip':
            contentType = { 'Content-Type': 'application/zip' };
            break;
    }
    resObj.writeHead(code, contentType);
    resObj.write(content);
    resObj.end();
}

/**
 * Returns the status of the system
 * @return Object
 */
function getStatus() {
    var status = {};
    /**
     * To be implemented by the student.
     *
     * Add a status message to `status`.
     * Add the current time to `status`.
     */
    return status;
}

/**
 * Get file content of a file
 * @param  String filename
 * @param  String directory The directory where to find the file
 * @return Object           The content of the file
 */
function readFile(filename, directory = 'public/') {
    var content = "";
    try {
        content = fs.readFileSync(__dirname + '/' + directory + filename);
    } catch (e) {
        console.log(e.name + ': node' + e.message);
        return e.message;
    }

    return content;
}

// Creates the server object
var server = http.createServer((request, response) => {
    // Gets the request url
    var path = url.parse(request.url).pathname;
    // Define the query string as an object
    queryObject = (url.parse(request.url, true)).query;

    // Switches on given path
    switch (path) {
        /**
         * Respond to the server with a plain word
         */
        case '/':
            /**
             * To be implemented by the student.
             *
             * Send `hello world` as response
             */
            break;

        /**
         * Respondes with a zip file
         */
        case '/zip':
            var zipedFile = readFile('myZip.zip');

            // if we got an error from the readFile the html will be a String
            // and there for need to change Content-Type to plain
            if (zipedFile instanceof String) {
                sendResponse(response, zipedFile, 404, 'plain');
            } else {
                // Send the zip file
                sendResponse(response, zipedFile, code, 'zip');
            }
            break;

        /**
         * Respond with an html-page
         */
        case '/index.html':
            /**
             * To be implemented by student.
             *
             * Read the content of the index.html file.
             * Save the content down to a varible called `html`
             * Set the correct content-type to a varible called `type`
             * Send the response to client with the correct content-type
             */
            break;

        /**
         * Returns the status of the system
         */
        case '/status':
            var status = getStatus();
            sendResponse(response, status, code, 'json');
            break;

        /**
         * Summarize the query paramters and return the sum
         */
        case '/sum':
            /**
             * To be implemented by student.
             *
             * Create an object called `content`.
             * Create an varible called `sum`
             * Summarize each value in queryObject and save it `sum`
             *
             * Send the summarized value to the client
             */
            break;

        /**
         * Filter away every query param that is larger than 42
         */
        case '/filter':
            /**
             * To be implemented by the student.
             * Take the queryObject and "filter" away values larger
             * than 42. Send these filterd values to the client
             * with correct status-code, content-type.
             */
            break;

        /**
         * Nothing match the path. Send 404
         */
        default:
            sendResponse(response, '404 File not found', 404, 'plain');
            break;
    }
});

export default server;
