/**
 * Server uptime
 */
process.env.NODE_ENV = 'test';
// Import the server "module" as "server"
import server from '../Server-Uptime/server-uptime';

// Dependencies needed for tests.
var assert = require('assert');

var request = require('supertest')(server);

describe('Server uptime', () => {

    before(() => {
        server.listen(1337);
    });

    after(() => {
        server.close();
    });

    it('should respond with the servers uptime', (done) => {
        request
            .get('/')
            .expect(200, done);
    });
});
