/**
 * EXAMPLE HOW TO USE THE ROUTER
 */
"use strict";

import Router from '../router/router';
var http = require('http');
var router = new Router();

router.get('/animal/', (req, res) => {
    res.end('Animal with a slash');
});

router.get('/map/:map', (req, res) => {
    console.log('PARAMS', req.params);
    console.log('/map/:map');
    res.end('map:map');
});

router.get('/maze/:map', (req, res) => {
    console.log('PARAMS', req.params);
    console.log('/maze/:map');
    res.end('MAZE:map');
});

router.get('/animal/id', (req, res) => {
    //console.log('PARAMS: ', req.params);
    var id = req.params.id;
    console.log('/animal/:id');
    res.end('Animal: ' + id + ' - 1 param');
});

router.get('/animal/:id/:name', (req, res) => {
    console.log('PARAMS', req.params);
    var id = req.params.id;
    var name = req.params.name;
    res.end('Animal: ' + id + ' ' + name + " - 2 params");
});

router.get('/', (req, res) => {
    var queryParam = req.query.q;
    res.end('Hello World: ' +  queryParam);
});

router.get('/send', (req, res) => {
    res.send('ok', 200);
});

router.get('/obj', (req, res) => {
    var obj = {
        x: 1,
        y: 2
    };

    res.json(obj);
});

router.get('/json', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var obj = {
        x: 1,
        y: 2
    };
    res.end(JSON.stringify(obj));
});

router.get('/plain', (req, res) => {
    res.send('asdasd', 'text/plain');
});

router.get('/html', (req, res) => {
    res.send('<html><body><h1>Hello!</h1></body></html>');
});

router.group('/api', function() {
    // /api
    router.get('/', function(req, res) {
        res.send('GET /api');
    });

    // /api/test
    router.get('/test', function(req, res) {
        res.send('GET /api/test');
    });

    // /api/v1/
    router.group('/v1', function() {

        // /api/v1/
        router.get('/', function(req, res) {
            res.send('/api/v1/');
        });
        // /api/v1/test
        router.get('/test', function (req, res) {
            res.send('/api/v1/test');
        });
    });
});

router.post('/test', (req, res) => {
    console.log(req.body);
    res.send('ok', 200);
});


// Create the server using the router.
http.createServer((req, res) => {
    router.route(req, res);
}).listen(1337);
//http.createServer(router.route.bind(router)).listen(1337);
//http.createServer(router.route).listen(1337);
