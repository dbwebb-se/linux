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

    it('POST /hello', (done) => {
        router.post('/hello', (req, res) => {
            res.end('POST');
        });

        request(setupServer())
            .post('/hello')
            .expect(200, done);
    });
});
