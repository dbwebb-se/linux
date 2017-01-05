import Core from '../fiveInRow/core';
process.env.NODE_ENV = 'test';

var assert = require("assert");

var core = null;

describe('Five in row core', () => {

    beforeEach(() => {
        core = new Core(10);
    });

    describe('getCurrentPlayer()', () => {
        it('Should return current player', () => {
            assert.equal('Player 1', core.getCurrentPlayer());
            core.place(0, 0);
            core.place(0, 1);
            assert.equal('Player 1', core.getCurrentPlayer());
        });
    });

    describe('getCurrentPlayerMarker()', () => {
        it('Should return current player char', () => {
            var marker = core.getCurrentPlayerMarker();
            assert.equal('X', marker);
            core.place(0, 0);
            marker = core.getCurrentPlayerMarker();
            assert.equal('O', marker);
        });
    });

    describe('place()', () => {
        it('Should place one mark', () => {
            core.place(0, 0);
            var map = core.getMap();
            assert.equal('X', map[0][0]);
        });

        it('Should placed many marks', () => {
            var x, y;
            for (y = 0; y < 10; y += 1) {
                for (x = 0; x < 10; x += 1) {
                    core.place(x, y);
                }
            }
            var map = core.getMap();

            for (y = 0; y < 10; y += 1) {
                for (x = 0; x < 10; x += 1) {
                    assert.equal(x % 2 === 0 ? 'X' : 'O', map[x][y]);
                }
            }
        });

        it('Place mark where already place once, should be his/her turn again ', () => {
            core.place(0, 0);
            assert.equal('X', core.getMap()[0][0]);
            try {
                core.place(0, 0);
            } catch (e) {
                assert.equal(e.message, '[0][0] already taken by X, try again O');
            }
            assert.equal('Player 2', core.getCurrentPlayer());
        });

        it('Place marker outside the "box" should not be allowed', () => {
            try {
                core.place(10, 11, 'X');
            } catch (e) {
                assert.equal(e instanceof Error, true);
                assert.equal(e.message, '[10][11] is outside the map-area, try again X');
            }
            try {
                core.place(11, 10, 'X');
            } catch (e) {
                assert.equal(e instanceof Error, true);
                assert.equal(e.message, '[11][10] is outside the map-area, try again X');
            }
            try {
                core.place(-1, 1, 'X');
            } catch (e) {
                assert.equal(e instanceof Error, true);
                assert.equal(e.message, '[-1][1] is outside the map-area, try again X');
            }
            try {
                core.place(1, -1, 'X');
            } catch (e) {
                assert.equal(e instanceof Error, true);
                assert.equal(e.message, '[1][-1] is outside the map-area, try again X');
            }
        });
    });

    describe('getMap()', () => {
        it('X should be forced marked', () => {
            core.place(0, 0);
            assert.equal('X', core.getMap()[0][0]);
            core.place(1, 1, 'X');
            assert.equal('X', core.getMap()[1][1]);
        });
    });


    describe('getPlayerName()', () => {
        it('Should return Player 1 when giveing X', () => {
            var result = core.getPlayerName('X');
            assert.equal(result, 'Player 1');
        });

        it('Should return Player 2 when giveing O', () => {
            var result = core.getPlayerName('O');
            assert.equal(result, 'Player 2');
        });
    });
});
