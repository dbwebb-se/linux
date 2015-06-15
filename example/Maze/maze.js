/**
 * 
 */

import router from './router';

var fs = require('fs');
var http = require('http');

var maps = [];
var currentMap = null;
var lastRoom;


/**
 * Wrapper function for sending an response
 * 
 */
function sendRes(resObj, content, code, typ) {
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
	maps = fs.readdirSync('./maps/');
	// Filter away all !.json
	maps.filter((map) => map.substr(map.contains('.'), map.length) === 'json');
	
	var json = JSON.stringify(maps);
	json.msg = 'Avalible maps';
	json.hint = 'Call /:nameOfMap';
	sendRes(res, json);
});

/**
 * Chooses the map
 */
router.get('/:map', (req, res) => {
	currentMap = req.params.map;
	
	if (maps.indexof(currentMap) === -1)  {
		sendRes(res, 'Map not found', 404, 'plain');
		currentMap = null;
		return;
	}
	// Reads the new map json
	currentMap = require('./maps/' + currentMap + '.json');
	sendRes(res, {'text': 'New map selected.'});
});

/**
 * initilize the "game". 
 */
router.get('/maze/', (req, res) => {
	if (currentMap === null) {
		sendRes(res, {
			'text': 'Map not selected.',
			'hint': 'Call /:nameOfMap first'
		});
	}
		
	lastRoom = currentMap[0];
	
	sendRes(res, lastRoom);
});

/**
 * Goes to the next room given the params
 */
router.get('/maze/:id/:str', (req, res) => {
	var id = req.params.id;
	var dir = req.params.str;
	
	var current = currentMap[id];
	// Check if its not a valid path choosen
	if (current.dirs[dir].indexof[dir] === -1) {
		current.error = 'Direction not allowed';
		sendRes(res, current, 404);
		return;
	}
	
	var temp = lastRoom;
	// Gets the room next room
	lastRoom = currentMap[current.dirs[dir]];
	
	if (lastRoom === undefined) {
		lastRoom = temp;
		current.error = 'Path dont exist';
		sendRes(res, current, 404);
		return;
	}
	
	sendRes(res, lastRoom);	
});

/**
 * Gets information about the room id
 */
router.get('/maze/:id/', (req, res) => {
	var id = req.params.id;
	
	var current = currentMap[id];
	
	if (current === undefined) {
		sendRes(res, 'Room not found', 404, 'plain');
		return;
	}
	
	sendRes(res, current);
});

var app = http.createServer((req, res) => {
	router.route(req, res);
});

app.listen(1337);
