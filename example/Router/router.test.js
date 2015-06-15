/**
 * Router tests
 */

import Router from '../Router/router';
var http = require('http');

// Dependencies needed for tests.
var assert = require('assert');
var request = require('supertest');


describe('Router', () => {
    var router;

    beforeEach(function(done) {
        router = new Router();
        done();
    });

    afterEach(function(done) {
        done();
    });

    function setupServer() {
       return http.createServer(function (req, res) {
            router.route(req, res);
        });
    }

    it('GET /hello', (done) => {
        router.get('/hello', (req, res) => {
            res.end('hello');
        });
        // The actual test.
        request(setupServer())
            .get('/hello')
            .expect(200, 'hello', done);
    });

    it('GET /', (done) => {
        router.get('/', (req, res) => {
            res.end('Home page');
        });

        request(setupServer())
            .get('/')
            .expect(200, 'Home page', done);
    });

    it ('404 not found GET /404', (done) => {
        request(setupServer())
            .get('/404')
            .expect(404, done);
    });

    it('POST /hello', (done) => {
        router.post('/hello', (req, res) => {
            res.end('POST');
        });

        request(setupServer())
            .post('/hello')
            .expect(200, done);
    });

    it('Multiple get requests', (done) => {
        router.get('/a', (req, res) => {
            req.end('a');
        });

        router.get('/b', (req, res) => {
            req.end('b');
        });

        request(setupServer())
            .get('/a')
            .expect(200, 'a');

        var nrOfRoutes = router.nrOfRoutes();

        assert.equal(2, nrOfRoutes);
        done();
    });

    it('GET with params', (done) => {
        router.get('/animal/:name', (req, res) => {
            var name = req.params.name;
            console.log(req.params);
            res.end('Animal ' + name);
        });

        request(setupServer())
            .get('/animal/dog')
            .expect(200, 'Animal dog', done);
    });

    it('GET with multiple params', (done) => {
        router.get('/animal/:id/:name', (req, res) => {
            var id = req.params.id;
            var name = req.params.name;

            res.end('ok');
        });

        request(setupServer())
            .get('/animal/1/kalle')
            .expect(200, 'ok', done);
    });

    it('GET with many params', (done) => {
        var b,c,d;
        router.get('/a/:b/:c/:d', (req, res) => {
                b = req.params.b,
                c = req.params.c,
                d = req.params.d;

            res.end(b + c + d);
        });

        request(setupServer())
            .get('/a/b/c/d')
            .expect(200, 'bcd', done);
    });
});
