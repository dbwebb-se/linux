/**
 *
 */

import Router from '../Router/router';

var router = new Router();

var fs = require('fs');
var http = require('http');

var maps = [];
var currentMap = null;
var lastRoom = null;
var gameid = null;

/**
 * Wrapper function for sending a response
 * @param  Object        resObj  The response
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
 * Initialize the maze
 * @param Object req The request
 * @param Object res The response
 */
router.get('/', (req, res) => {
    currentMap = null;
    lastRoom = null;
    gameid = ((String)(Math.random() * 100)).replace('.', '').substr(0, 5);
    var content = {
        text: 'New game initialized',
        gameid: gameid
    };
    sendResponse(res, content);
});

/**
 * Retuns list of all avaliable maps
 * @param Object req The request
 * @param Object res The response
 */
router.get('/map', (req, res) => {
    maps = fs.readdirSync(__dirname + '/maps');

    // Filter away all non json-files
    maps = maps.filter((map) => map.includes('.json'));

    sendResponse(res, maps);
});

/**
 * Loads the map to the maze
 * @param Object req The request
 * @param Object res The response
 */
router.get('/map/:map', (req, res) => {
    var map = req.params.map;

    if (!map.includes('.json')) {
        map += '.json';
    }

    if (maps.indexOf(map) === -1)  {
        sendResponse(res, 'Map not found', 404, 'plain');
        currentMap = null;
        return;
    }
    var path = __dirname + '/maps/' + map;

    // Reads the new map json
    currentMap = require(path);
    sendResponse(res, {
        'text': 'New map selected.'
    });
});

/**
 * Gets content of first room
 * @param Object req The request
 * @param Object res The response
 */
router.get('/maze', (req, res) => {
    if (currentMap === null) {
        sendResponse(res, {
            'text': 'Map not selected.',
            'hint': 'Call /map/:map first'
        }, 500);
        return;
    }

    lastRoom = currentMap[0];

    sendResponse(res, lastRoom);
});

/**
 * Gets info about the room
 * @param Object req The request
 * @param Object res The response
 */
router.get('/maze/:roomId', (req, res) => {
    if (currentMap === null) {
        sendResponse(res, 'Content not loaded', 404, 'plain');
        return;
    }
    var id = req.params.roomId;

    var current = currentMap[id];

    if (current === undefined) {
        sendResponse(res, 'Room not found', 404, 'plain');
        return;
    }

    sendResponse(res, current);
});

/**
 * Walks into next room from given roomId and gives the next rooms info.
 * @param Object req The request
 * @param Object res The response
 */
router.get('/maze/:roomId/:direction', (req, res) => {
    var id = req.params.roomId;
    var dir = req.params.direction;
    if (currentMap === null) {
        sendResponse(res, 'Content not loaded', 404, 'plain');
        return;
    }
    var current = currentMap[id];

    // Check if its not a valid path choosen
    if (current.directions[dir] === undefined) {
        current.error = 'Direction not allowed';
        sendResponse(res, current, 404);
        return;
    }

    var temp = lastRoom;
    // Gets the room next room
    lastRoom = currentMap[current.directions[dir]];

    if (lastRoom === undefined) {
        lastRoom = temp;
        current.error = 'Path dont exist';
        sendResponse(res, current, 404);
        return;
    }

    sendResponse(res, lastRoom);
});

var server = http.createServer((req, res) => {
        router.route(req, res);
}).listen(1337);

export default server;
