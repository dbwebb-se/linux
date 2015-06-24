/**
 * Simple server tests....
 */

// Import the server "module" as "server"
import * as server from '../Simple-Server/server';

// Dependencies needed for tests.
var request = require('supertest')('http://localhost:1337');

describe('Simple Server', () => {

    it('should respond with plain text', (done) => {
        request
            .get('/')
            .expect('Content-Type', 'text/plain')
            .expect(200, done);
    });

    it('should respond with Hello World', (done) => {
        request
            .get('/')
            .expect(200, 'Hello World', done);
    });

});
