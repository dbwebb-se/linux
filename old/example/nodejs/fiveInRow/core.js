
class Core {

    /**
     * @param  Integer size             Inital size on the gameboard
     */
    constructor(size = 25) {
        this.map = [];
        this.size = size;
        this.map.length = this.size;
        for (var i = 0; i < this.map.length; i += 1) {
            this.map[i] = [];
            for (var y = 0; y < this.size; y += 1) {
                this.map[i][y] = '_';
            }
        }
        this.turns = 0;
    }

    /**
     * Places a mark in the gameboard (map).
     * @param  Integer  x               X position on the gameboard
     * @param  Integer  y               Y position on the gameboard
     * @param  String forcePlayerMark   Force place a players mark
     * @throws Error if user place outside the area of the gameboard
     */
    place(x, y, forcePlayerMark = false) {
        var mark = this.getCurrentPlayerMarker();
        if (forcePlayerMark !== false && process.env.NODE_ENV === 'test') {
            mark =  forcePlayerMark;
        }

        if (x > this.size || x < 0 || y > this.size || y < 0) {
            throw new Error('[' + x + '][' + y + '] is outside the map-area, try again ' + mark);
        }
        // this.map[x][y] !== undefined
        if (this.map[x][y] !== '_') {
            throw new Error('[' + x + '][' + y + '] already taken by ' + this.map[x][y] + ', try again ' + mark);
        }
        this.map[x][y] = mark;
        this.turns += 1;
    }

    /**
     * Prints the game board in a petty faction
     */
    printMap() {
        process.stdout.write(' ');
        for (var i = 0; i < this.size; i += 1) {
            process.stdout.write(' ' + i);
        }
        process.stdout.write('\n');
        for (i = 0; i < this.size; i += 1) {
            process.stdout.write(i + '|');
            for (var j = 0; j < this.size; j += 1) {
                process.stdout.write(this.map[i][j] + '|');
            }
            process.stdout.write('\n');
        }
    }

    /**
     * Returns the current game board as it is
     * @return Array
     */
    getMap() {
        return this.map;
    }

    /**
     * Calculates if there is a winner and if so it
     * returns the name on the winner
     * @return Boolean/String
     */
    getWinner() {
        /**
         * To be implemented by the student.
         * It should return the players "pretty" name
         * e.g 'Player 1' or 'Player 2'
         * If no winner was found it should return false
         */
        return false;
    }

    /**
     * Returns the current players mark
     * @return char
     */
    getCurrentPlayerMarker() {
        return this.turns % 2 === 0 ? 'X' : 'O';
    }

    /**
     * Gets the numbers of marks placed.
     * This value is the same as the amount
     * of turns played
     * @return Integer
     */
    getNrOfMarksPlaced() {
        return this.turns;
    }

    /**
     * Gets a more readable name of the the current player
     * @return String
     */
    getCurrentPlayer() {
        return this.turns % 2 === 0 ? 'Player 1' : 'Player 2';
    }

    /**
     * Gets the player name from the mark given
     * @param  Char mark
     * @return String
     */
    getPlayerName(mark) {
        if (mark === 'X') {
            return 'Player 1';
        }
        return 'Player 2';
    }

    /**
     * Gets size of the gameboard
     * @return Integer
     */
    getCurrentSize() {
        return this.size;
    }
}

export default Core;
