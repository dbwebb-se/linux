var url  = require('url');
var http = require('http');
var fs   = require('fs');

var PORT = 1337;

/**
 * Wrapper function for sending a response
 * @param  Object        resObj  The response object
 * @param  Object/String content What should be written to the response
 * @param  Integer       code    HTTP status code
 * @param  String        type    Content-Type of the response
 */
function sendResponse(resObj, content, code = 200, type) {
    var contentType;
    switch (type) {
        default:
        case 'json':
            contentType = {
                'Content-Type': 'application/json'
            };
            content = JSON.stringify(content);
            break;
        case 'plain':
            contentType = {
                'Content-Type': 'text/plain'
            };
            break;
        case 'html':
            contentType = {
                'Content-Type': 'text/html'
            };
            break;
        case 'zip':
            contentType = {
                'Content-Type': 'application/octet-stream'
            };
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
    status.time = new Date();
    status.message = 'I\'m fine :-D';
    return status;
}

/**
 * Get file content of filename
 * @param  String filename
 * @param  String directory The directory where to find the file
 * @return Object           The content of the file
 */
function readFile(filename, directory = 'public/') {
    var content = "";
    try {
        content = fs.readFileSync(__dirname + '/' + directory + filename);
    } catch (e) {
        console.log(e.name + ':' + e.message);
        return e.message;
    }

    return content;
}

var server = http.createServer((req, res) => {
    // Gets the request url
    var path = url.parse(req.url).pathname;

    switch (path) {
        /**
         * Responds to the server with a plain word
         */
        case '/':
            sendResponse(res, 'Hello world', 200, 'plain');
            break;

        /**
         * Responds with an html-page
         */
        case '/index.html':
            var html = readFile('index.html');
            var type = 'html';

            // if we got an error from the readFile the html will be a String
            // and there for need to change Content-Type to plain
            if (html instanceof String) {
                type = 'plain';
            }
            sendResponse(res, html, 200, type);
            break;

        /**
         * Returns the status of the system
         */
        case '/status':
            var status = getStatus();
            sendResponse(res, status, 200, 'json');
            break;

        /**
         * Respondes with a zip file
         */
        case '/zip':
            var zipedFile = readFile('myZip.zip');
            if (zipedFile instanceof String) {
                sendResponse(res, zipedFile, 404, 'plain');
            } else {
                // Send the zip file
                sendResponse(res, zipedFile, 200, 'zip');
            }
            break;

        /**
         * Nothing match the path. Send 404
         */
        default:
            sendResponse(res, '404 File not found', 404, 'plain');
            break;

    }
});

server.listen(PORT);
console.log('Server is now listening on port 1337');
