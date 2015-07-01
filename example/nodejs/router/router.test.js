/**
 * Router tests
 */
process.env.NODE_ENV = 'test';
import Router from '../router/router';
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

    it('Using add method with get, post, put, delete', (done) => {
        router.add('GET', '/', (req, res) => {
            res.end('get');
        });
        router.add('POST', '/', (req, res) => {
            res.end('post');
        });
        router.add('PUT', '/', (req, res) => {
            res.end('put');
        });
        router.add('DELETE', '/', (req, res) => {
            res.end('delete');
        });

        var req = request(setupServer());

        req
            .get('/')
            .expect(200, 'get')
            .end(() => {
                req
                    .post('/')
                    .expect(200, 'post')
                    .end(() => {
                        req
                            .put('/')
                            .expect(200, 'put')
                            .end(() => {
                                req
                                    .delete('/')
                                    .expect(200, 'delete', done);
                            });
                    });
            });
    });

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

    it ('404 not found', (done) => {
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
            res.end('a');
        });

        router.get('/b', (req, res) => {
            res.end('b');
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

            res.end(id + name);
        });

        request(setupServer())
            .get('/animal/1/kalle')
            .expect(200, '1kalle', done);
    });

    it('GET with many params', (done) => {
        var b,c,d;
        router.get('/a/:b/:c/:d', (req, res) => {
                b = req.params.b;
                c = req.params.c;
                d = req.params.d;

            res.end(b + c + d);
        });

        request(setupServer())
            .get('/a/b/c/d')
            .expect(200, 'bcd', done);
    });

    it('Many get request with params', (done) => {
        router.get('/map/:map', (req, res) => {
            res.end('map:map');
        });
        router.get('/maze/:map', (req, res) => {
            res.end('MAZE:map');
        });

        router.get('/maze', (req, res) => {
            res.end('maze');
        });

        var req = request(setupServer());

        req
            .get('/map/1')
            .expect(200, 'map:map')
            .end(function () {
                req
                    .get('/maze/1')
                    .expect(200, 'MAZE:map')
                    .end(function () {
                        req
                            .get('/maze')
                            .expect(200, 'maze', done);
                    });
            });
    });

    it('Should remove trailing slashes from path', (done) => {
        router.get('/animal/', (req, res) => {
            res.end('animal');
        });

        var req = request(setupServer());

        req
            .get('/animal')
            .expect(200, 'animal')
            .end(() => {
                req
                    .get('/animal/')
                    .expect(200, 'animal', done);
            });
    });

    it('Should not route to non-existent routes', (done) => {
        request(setupServer())
            .get('/i-do-not-exist')
            .expect(404, done);
    });

    it('Should be able to use request params', (done) => {
        router.get('/animal', (req, res) => {
            var query = req.query.id;
            res.end('animal' + query);
        });

        request(setupServer())
            .get('/animal?id=1')
            .expect(200, 'animal1', done);
    });

    it('Query parameters empty', (done) => {
       router.get('/animal', (req, res) => {

            if (req.query instanceof Object && Object.keys(req.query).length === 0) {
                res.end('empty');
            } else {
                res.end('not');
            }
        });

        var req = request(setupServer());
        req
            .get('/animal') // Without a query param -> empty
            .expect(200, 'empty')
            .end(() => {
                req
                    .get('/animal?q=5') // WITH query params -> not
                    .expect(200, 'not', done);
            });
    });
/*
    it('Group with a new router', (done) => {
        var newRouter = new Router();

        newRouter.get('/new', (req, res) => {
            res.end('new router');
        });

        newRouter.get('/new/new', (req, res) => {
            res.end('new router');
        });

        newRouter.get('/params/:id', (req, res) => {
            res.end(req.params.id);
        });

        router.get('/asdf', (req, res) => {
            res.end('standard router');
        });

        router.group('/api', newRouter);

        var req = request(setupServer());

        req
            .get('/api/new')
            .expect(200, 'new router')
            .end(() => {
                req
                    .get('/asdf')
                    .expect(200)
                    .end(() => {
                        req
                            .get('/api/new/new')
                            .expect(200, 'new router')
                            .end(() => {
                                req
                                    .get('/api/params/1337')
                                    .expect(200, '1337', done);
                            })
                    });
            });

    });
*/
    it('GROUP laravel style', (done) => {

        // Group all routes inside to /api/v1
        router.group('/api/v1', () => {
            router.get('/test', (req, res) => {
                res.end('v1 test');
            });
        });

        router.get('/standard', (req, res) => {
            res.end('standard');
        });

        router.get('/another', (req, res) => {
            res.end('another');
        });

        // Group all routes inside to /api/v2
        router.group('/api/v2', () => {
            router.get('/users', (req, res) => {
                res.end('GET /api/users');
            });

            router.post('/users', (req, res) => {
                res.end('POST /api/users');
            });
        });

        router.get('/kalle', (req, res) => {
            res.end('kalle');
        });

        var req = request(setupServer());

        req
            .get('/standard')
            .expect(200, 'standard')
            .end(() => {
                req
                    .get('/api/v2/users')
                    .expect(200, 'GET /api/users')
                    .end(() => {
                        req
                            .post('/api/v2/users')
                            .expect(200, 'POST /api/users')
                            .end(() => {
                                req
                                    .get('/kalle')
                                    .expect(200, 'kalle')
                                    .end(() => {
                                        req
                                            .get('/api/v1/test')
                                            .expect(200, 'v1 test', done);
                                    });
                            });
                    });
            });
    });
});
