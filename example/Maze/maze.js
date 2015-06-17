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


/**
 * Wrapper function for sending a response
 *
 */
function sendResponse(resObj, content, code, typ) {
    code = code || 200;
    var contentType;
    switch (typ) {
        default:
        case 'json':
            contentType = {'Content-Type': 'application/json'};
            content = JSON.stringify(content);
            break;
        case 'plain':
            contentType = {'Content-Type': 'text/plain'};
            break;
        case 'html':
            contentType = {'Content-Type': 'text/html'};
            break;
    }
    resObj.writeHead(code, contentType);
    resObj.end(content);
}

/**
 * Get all maps avalible
 */
router.get('/', (req, res) => {
    maps = fs.readdirSync(__dirname + '/maps');
    currentMap = null;
    lastRoom = null;

    // Filter away all !.json
    maps = maps.filter((map) => map.includes('.json'));

    sendResponse(res, maps);
});

/**
 * Chooses the map
 */
router.get('/:map', (req, res) => {
    currentMap = req.params.map;

    if (maps.indexOf(currentMap + '.json') === -1)  {
        sendResponse(res, 'Map not found', 404, 'plain');
        currentMap = null;
        return;
    }

    // Reads the new map json
    currentMap = require(__dirname + '/maps/' + currentMap + '.json');
    sendResponse(res, {'text': 'New map selected.'});
});

/**
 * initilize the "game".
 */
router.get('/maze/', (req, res) => {
    if (currentMap === null) {
        sendResponse(res, {
            'text': 'Map not selected.',
            'hint': 'Call /:nameOfMap first'
        });
        return;
    }

    lastRoom = currentMap[0];

    sendResponse(res, lastRoom);
});

/**
 * Goes to the next room given the params
 */
router.get('/maze/:id/:str', (req, res) => {
    var id = req.params.id;
    var dir = req.params.str;
    if (currentMap === null) {
        sendResponse(res, 'Content not loaded', 404, 'plain');
        return;
    }
    var current = currentMap[id];

    // Check if its not a valid path choosen
    if (current.dirs[dir] === undefined) {
        current.error = 'Direction not allowed';
        sendResponse(res, current, 404);
        return;
    }

    var temp = lastRoom;
    // Gets the room next room
    lastRoom = currentMap[current.dirs[dir]];

    if (lastRoom === undefined) {
        lastRoom = temp;
        current.error = 'Path dont exist';
        sendResponse(res, current, 404);
        return;
    }

    sendResponse(res, lastRoom);
});

/**
 * Gets information about the room id
 */
router.get('/maze/:id', (req, res) => {
    if (currentMap === null) {
        sendResponse(res, 'Content not loaded', 404, 'plain');
        return;
    }
    var id = req.params.id;

    var current = currentMap[id];

    if (current === undefined) {
        sendResponse(res, 'Room not found', 404, 'plain');
        return;
    }

    sendResponse(res, current);
});


var server = http.createServer((req, res) => {
        router.route(req, res);
}).listen(1337);

export default server;
