/**
 * Server uptime
 */
process.env.NODE_ENV = 'test';
// Import the server "module" as "server"
import server from '../serverUptime/server-uptime';

// Dependencies needed for tests.
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
