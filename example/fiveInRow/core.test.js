import Core from '../fiveInRow/core';
process.env.NODE_ENV = 'test';

var request = require('supertest');
var assert = require("assert");

var core = null;

describe('Five in row core', () => {

    beforeEach(() => {
        core = new Core(10);
    });

    it('Should return current player', () => {
         assert.equal('Player 1', core.getCurrentPlayer());
         core.place(0, 0);
         core.place(0, 1);
          assert.equal('Player 1', core.getCurrentPlayer());
    });

    it('Should return current player char', () => {
        var marker = core.getCurrentPlayerMarker();
        assert.equal('X', marker);
        core.place(0, 0);
        marker = core.getCurrentPlayerMarker();
        assert.equal('O', marker);
    });

    it('Should place one mark with core.place(x, y)', () => {
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

    it('forcePlayerMark test', () => {
        core.place(0, 0);
        assert.equal('X', core.getMap()[0][0]);
        core.place(1, 1, 'X');
        assert.equal('X', core.getMap()[1][1]);
    });

    it('Place mark where already place once, should be his/her turn again ', () => {
        core.place(0, 0);
        assert.equal('X', core.getMap()[0][0]);
        try {
            core.place(0, 0);
        } catch (e) {
            console.log(e);
            assert.equal(e, '[0][0] already taken by X, try again O');
        }
        assert.equal('Player 2', core.getCurrentPlayer());
    });

    it('Place marker outside the "box" should not be allowed', () => {
        try {
            core.place(10, 11, 'X');
        } catch (e) {
            assert.equal(e, '[10][11] is outside the map-area, try again X');
        }
        try {
            core.place(11, 10, 'X');
        } catch (e) {
            assert.equal(e, '[11][10] is outside the map-area, try again X');
        }
        try {
            core.place(-1, 1, 'X');
        } catch (e) {
            assert.equal(e, '[-1][1] is outside the map-area, try again X');
        }
        try {
            core.place(1, -1, 'X');
        } catch (e) {
            assert.equal(e, '[1][-1] is outside the map-area, try again X');
        }
    });

/*    it('Winner X-led 5 in row', () => {
        core.place(0, 0, 'X');
        core.place(1, 0, 'X');
        core.place(2, 0, 'X');
        core.place(3, 0, 'X');
        core.place(4, 0, 'X');
        core.place(5, 0, 'X');
        console.log(core.getMap());
        assert.equal('Player 1', core.getWinner());
    });*/

});
