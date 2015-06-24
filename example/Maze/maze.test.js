process.env.NODE_ENV = 'test';
import maze from '../Maze/maze';

// Dependencies needed for tests.
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
        var req = request(app);
        req.get('/')
            .expect(200)
            .end((err, result) => {
                var gameid = JSON.parse(result.res.text).gameid;
                req
                    .get('/' + gameid + '/map/maze-of-doom')
                    .expect(200, '{"text":"New map selected."}', done);
            });
    });

    it('Load map and it DON\'T exist', (done) => {
        var req = request(app);
        req.get('/')
            .expect(200)
            .end((err, result) => {
                var gameid = JSON.parse(result.res.text).gameid;
                req
                    .get('/' + gameid + '/map/i-do-not-exist')
                    .expect(404, 'Map not found', done);
                });
    });

    it('Map should not be selected', (done) => {
        var req = request(app);
        var gameid;
        req
            .get('/')
            .expect(200)
            .end((err, result) => {
                gameid = JSON.parse(result.res.text).gameid;

                req
                    .get('/' + gameid + '/maze')
                    .expect(500, '{"text":"Map not selected.","hint":"Call /map/:map first"}', done);
            });
    });

    it('Content should not be loaded', (done) => {
        var req = request(app);
        var gameid = 0;
        req
            .get('/')
            .expect(200)
            .end((err, result) => {
                gameid = JSON.parse(result.res.text).gameid;
                req
                    .get('/' + gameid + '/maze/1')
                    .expect(404, done);
            });

    });

    it('Enter maze', (done) => {
        var req = request(app);
        var gameid = 0;
        req
            .get('/')
            .expect(200)
            .end((err, result) => {
                gameid = JSON.parse(result.res.text).gameid;
                req
                    .get('/' + gameid + '/map/maze-of-doom')
                    .expect(200, '{"text":"New map selected."}')
                    .end(() => {
                        req
                            .get('/' + gameid + '/maze/0/')
                            .expect(200, done);
                    });
            });
    });

    it('Check normal path and it should be ok', (done) => {
        var req = request(app);
        var gameid = 0;
        req.get('/')
            .expect(200)
            .end((err, result) => {
                gameid = JSON.parse(result.res.text).gameid;
                req.get('/map/')
                   .end(() => {
                       req.get('/' + gameid + '/map/maze-of-doom.json')
                          .expect(200)
                          .end(() => {
                              req.get('/' + gameid + '/maze/')
                                 .end(200)
                                 .end(() => {
                                     req.get('/' + gameid + '/maze/0/east')
                                        .expect(200, done);
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
        .end((err, result) => {
            var gameid = JSON.parse(result.res.text).gameid;
            req
                .get('/' + gameid + '/map/maze-of-doom')
                .expect(200, '{"text":"New map selected."}')
                .end(() => {
                    req
                        .get('/' + gameid + '/maze/' + perfectPath[0].id + '/' + perfectPath[0].dir)
                        .expect(200)
                        .end(() => {
                            req
                                .get('/' + gameid + '/maze/' + perfectPath[1].id + '/' + perfectPath[1].dir)
                                .expect(200)
                                .end(() => {
                                    req
                                        .get('/' + gameid + '/maze/' + perfectPath[2].id + '/' + perfectPath[2].dir)
                                        .expect(200)
                                        .end(() => {
                                            req
                                                .get('/' + gameid + '/maze/' + perfectPath[3].id + '/' + perfectPath[3].dir)
                                                .expect(200)
                                                .end(() => {
                                                    req
                                                        .get('/' + gameid + '/maze/' + perfectPath[4].id + '/' + perfectPath[4].dir)
                                                        .expect(200)
                                                        .end(() => {
                                                            req
                                                                .get('/' + gameid + '/maze/' + perfectPath[5].id + '/' + perfectPath[5].dir)
                                                                .expect(200)
                                                                .end(() => {
                                                                    req
                                                                        .get('/' + gameid + '/maze/' + perfectPath[6].id + '/' + perfectPath[6].dir)
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

    it('Check normal path with diffrent gameids. Should not be same maze ', (done) => {
        var req = request(app);
        req.get('/')
        .expect(200)
        .end((err, result) => {
            var gameid = JSON.parse(result.res.text).gameid;
            req.get('/map/')
            .end(() => {
                req.get('/' + gameid + '/map/maze-of-doom')
                .expect(200)
                .end(() => {
                    req.get('/' + 123 + '/maze/0')
                    .expect(500, done);
                });
            });
        });
    });

    it('Two games should be able to run at the same time', (done) => {
        var req = request(app);

        // First game
        req.get('/')
        .expect(200)
        .end((err, result) => {
            var gameid = JSON.parse(result.res.text).gameid;
            console.log(gameid);
            req.get('/' + gameid + '/map/small-maze')
            .expect(200)
            .end(() => {
                req.get('/' + gameid + '/maze/0/south')
                .expect(200)
                .end(() => {
                    req.get('/' + gameid + '/maze/1/south')
                    .expect(200,
                    '{"roomid":2,"description":"You found the exit","directions":{}}'
                    );
                });
            });
        });

        // Second game
        req.get('/')
        .expect(200)
        .end((err, result) => {
            var gameid = JSON.parse(result.res.text).gameid;
            console.log(gameid);
            req.get('/' + gameid + '/map/small-maze')
            .expect(200)
            .end(() => {
                req.get('/' + gameid + '/maze/0/south')
                .expect(200)
                .end(() => {
                    req.get('/' + gameid + '/maze/1/south')
                    .expect(200,
                    '{"roomid":2,"description":"You found the exit","directions":{}}',
                    done
                    );
                });
            });
        });

    });

});
