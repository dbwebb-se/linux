/**
 * Server uptime
 */

// Import the server "module" as "server"
import * as server from '../Server-Uptime/server-uptime';

// Dependencies needed for tests.
var assert = require('assert');
var request = require('supertest')('http://localhost:1337');

describe('Server uptime', () => {

    it('should respond with the servers uptime', (done) => {
        request
            .get('/')
            .expect(200, done);
    });
});
