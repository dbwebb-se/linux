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
router.get('/animal', (req, res) => {

    res.end('Animal - NO PARAMS');
});

router.get('/animal/:id', (req, res) => {
    //console.log('PARAMS: ', req.params);
    var id = req.params.id;
    res.end('Animal: ' + id + ' - 1 param');
});

router.get('/animal/:id/:name', (req, res) => {
    //console.log('PARAMS', req.params);
    var id = req.params.id;
    var name = req.params.name;
    res.end('Animal: ' + id + ' ' + name + " - 2 params");
});



// Create the server using the router.
http.createServer(function (req, res) {
    router.route(req, res);
}).listen(1337);
