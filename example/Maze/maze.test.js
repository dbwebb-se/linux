import maze from '../Maze/maze';

var http = require('http');

// Dependencies needed for tests.
var assert = require('assert');
var request = require('supertest');

describe('Maze', () => {

    var app = maze;

    it('init a new game', (done) => {
        request(app)
        .get('/')
        .expect(200, done);
    });

    it('Return a list of avaliable map', (done) => {
         request(app)
            .get('/map')
            .expect(200, done);
    });


    it('Load map and it exist', (done) => {
        request(app)
            .get('/map/maze-of-doom')
            .expect(200, '{"text":"New map selected."}', done);
    });

    it('Load map and it DON\'T exist', (done) => {
        request(app)
            .get('/map/i-do-not-exist')
            .expect(404, 'Map not found', done);
    });

    it('Map should not be selected', (done) => {
        var req = request(app);
        req
            .get('/')
            .expect(200)
            .end(() => {
                req
                    .get('/maze')
                    .expect(500, '{"text":"Map not selected.","hint":"Call /map/:map first"}', done)
            });
    });

    it('Content should not be loaded', (done) => {
        var req = request(app);
        req
            .get('/')
            .expect(200)
            .end(() => {
                req
                    .get('/maze/1')
                    .expect(404, done);
            });

    });

    it('Enter maze', (done) => {
        var req = request(app);
        req
            .get('/')
            .expect(200)
            .end(() => {
                req
                    .get('/map/maze-of-doom')
                    .expect(200, '{"text":"New map selected."}')
                    .end(() => {
                        req
                            .get('/maze/0/')
                            .expect(200, done);
                    });
            });
    });

    it('Check normal path and it should be ok', (done) => {
        var req = request(app);
        req.get('/')
            .expect(200)
            .end(() => {
                req.get('/map/')
                   .end(() => {
                       req.get('/map/maze-of-doom.json')
                          .expect(200)
                          .end(() => {
                              req.get('/map/maze-of-doom.json')
                                  .expect(200)
                                  .end(() => {
                                      req.get('/maze/')
                                         .end(200)
                                         .end(() => {
                                             req.get('/maze/0/east')
                                                .expect(200, done);
                                         });
                                  });
                          });
                   });
            });
    });

    it('Test perfect round', (done) => {
        var perfectPath = [
            {
                'id':0, 'dir':'west'
            },
            {
                'id':1, 'dir':'east',
            },
            {
                'id':2, 'dir':'south'
            },
            {
                'id':5, 'dir':'south'
            },
            {
                'id':6, 'dir':'south'
            },
            {
                'id':11, 'dir':'west'
            },
            {
                'id':10, 'dir':'west'
            }
        ];

        var req = request(app);
        req.get('/')
        .expect(200)
        .end(() => {
            req
                .get('/map/maze-of-doom')
                .expect(200, '{"text":"New map selected."}')
                .end(() => {
                    req
                        .get('/maze/' + perfectPath[0].id + '/' + perfectPath[0].dir)
                        .expect(200)
                        .end(() => {
                            req
                                .get('/maze/' + perfectPath[1].id + '/' + perfectPath[1].dir)
                                .expect(200)
                                .end(() => {
                                    req
                                        .get('/maze/' + perfectPath[2].id + '/' + perfectPath[2].dir)
                                        .expect(200)
                                        .end(() => {
                                            req
                                                .get('/maze/' + perfectPath[3].id + '/' + perfectPath[3].dir)
                                                .expect(200)
                                                .end(() => {
                                                    req
                                                        .get('/maze/' + perfectPath[4].id + '/' + perfectPath[4].dir)
                                                        .expect(200)
                                                        .end(() => {
                                                            req
                                                                .get('/maze/' + perfectPath[5].id + '/' + perfectPath[5].dir)
                                                                .expect(200)
                                                                .end(() => {
                                                                    req
                                                                        .get('/maze/' + perfectPath[6].id + '/' + perfectPath[6].dir)
                                                                        .expect(200, '{"roomid":9,"description":"You found the exit","directions":{}}', done); // END 6
                                                                }); // END 5
                                                        }); // END 4
                                                }); // END 3
                                        }); // END 2
                                }); // END 1
                        }); // END 0
                }); // END /maze-of-doom
        }); // END /



    });

});
