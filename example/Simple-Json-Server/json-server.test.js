/**
 * Simple server tests....
 */

// Import the server "module" as "server"
import * as server from '../Simple-Json-Server/json-server';

// Dependencies needed for tests.
var assert = require('assert');
var sinon = require('sinon');
var request = require('supertest')('http://localhost:1337/');

describe('Simple Json Server', () => {    
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
