/**
 * Simple server tests....
 */
"use strict";

process.env.NODE_ENV = 'test';

// Import the server "module" as "server"
import server from '../simpleJsonServer/jsonServer';


// Dependencies needed for tests.
var request = require('supertest')(server);

describe('Simple Json Server', () => {
    before(() => {
        server.listen(1337);
    });

    after(() => {
        server.close();
    });

    it('should respond with application/json', (done) => {
        request
            .get('/')
            .expect('Content-Type', 'application/json')
            .expect(200, done);
    });

    it('should respond with Hello World', (done) => {
        request
            .get('/')
            .expect(200, '{"text":"Hello World"}', done);
    });

});
