/**
 * Simple server tests....
 */
"use strict";

process.env.NODE_ENV = 'test';

// Import the server "module" as "server"
import server from '../simpleServer/server';

// Dependencies needed for tests.
var request = require('supertest')(server);

describe('Simple Server', () => {

    before(() => {
        server.listen(1337);
    });

    after(() => {
        server.close();
    });

    it('should respond with plain text', (done) => {
        request
            .get('/')
            .expect('Content-Type', 'text/plain')
            .expect(200, done);
    });

    it('should respond with Hello World', (done) => {
        request
            .get('/')
            .expect(200, 'Hello World\n', done);
    });

});
