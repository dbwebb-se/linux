
class Core {

    constructor(size = 25) {
        this.map = [];
        this.size = size;
        this.map.length = this.size;
        for (var i = 0; i < this.map.length; i += 1) {
            this.map[i] = [];
            this.map[i].length = this.size;
        }
        this.turns = 0;
    }

    place(x, y, forcePlayerMark = false) {
        var mark = this.getCurrentPlayerMarker();
        if (forcePlayerMark !== false && process.env.NODE_ENV === 'test') {
            mark =  forcePlayerMark;
        }

        if (this.map[x][y] !== undefined) {
            throw '[' + x + '][' + y + '] already taken by ' + this.map[x][y] + ', try again ' + mark;
        }
        this.map[x][y] = mark;
        this.turns += 1;
    }

    getMap() {
        return this.map;
    }

    getWinner() {
        var mark = false;
        /*var haveWinner = false;
        var x = 0,y = 0;
        var nrInRow = 0;
        while (
            (this.size < x || this.size < y) &&
            (this.map[x][y] === this.map[x + 1][y]) &&
            (haveWinner === false)
        ) {

            nrInRow += 1;
        }

        /*for (var x = 0; x < this.map.length && !haveWinner; x += 1) {
            for (var y = 0; y < this.map[x].length && !haveWinner; y += 1) {
                var currentMark = this.map[x][y];
                currentMark
            }
        }*/
        return mark;
    }

    getCurrentPlayerMarker() {
        return this.turns % 2 === 0 ? 'X' : 'O';
    }

    getNrOfMarksPlaced() {
        return this.turns;
    }

    getCurrentPlayer() {
        return this.turns % 2 === 0 ? 'Player 1' : 'Player 2';
    }

    getCurrentSize() {
        return this.size;
    }

}

export default Core;
