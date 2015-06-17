/**
 * EXAMPLE HOW TO USE THE ROUTER
 */

import Router from '../Router/router';
var http = require('http');
var router = new Router();

/*function hello(req, res) {
    res.end('Hello');
}

// Standard 'GET /' using the function hello.
router.add('GET', '/', hello);

// Standard 'GET /hello' using the function hello.
router.add('GET', '/hello', hello);

// 'GET /foo' with anonymous function.
router.add('GET', '/foo', function (req, res) {
    res.end('FOO');
});

// 'GET /helloworld' with anonymous function.
router.add('GET', '/helloworld', function (req, res) {
    res.end('Hello WORLD');
});

// 'GET /blabla' using ES6 arrow function.
router.get('/blabla', (req, res) => {
    res.end('blabla');
});

// 'POST /hello' with anonymous function.
router.add('POST', '/hello', function (req, res) {
    res.end('POST REQUEST');
});
*/

/*router.get('/animal', (req, res) => {
    res.end('Animal');
});
*/

router.get('/animal/', (req, res) => {
    /*console.log(req);
    console.log('-----------------');
    console.log(res);*/
    res.end('Animal with a slash');
});

router.get('/map/:map', (req, res) => {
    console.log('PARAMS', req.params);
    console.log('/map/:map')
    res.end('map:map');
})
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



// Create the server using the router.
http.createServer(function (req, res) {
    router.route(req, res);
}).listen(1337);
