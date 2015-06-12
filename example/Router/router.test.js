/**
 * Router tests
 */

import {Router} from '../Router/router';
var http = require('http');

// Dependencies needed for tests.
var assert = require('assert');

describe('Router', () => {

    it('should blabalba', (done) => {

        var router = new Router();

        router.get('/', function(req, res) {
            res.writeHead(200);
            res.end('hello');
        });

        http.createServer(router).listen(8080);
    });
});
