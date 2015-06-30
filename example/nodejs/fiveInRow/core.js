
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
            this.map[i].length = this.size;
        }
        this.turns = 0;
    }

    /**
     * Places a mark in the gameboard (map).
     * @param  Integer  x               X position on the gameboard
     * @param  Integer  y               Y position on the gameboard
     * @param  String forcePlayerMark   Force place a players mark
     */
    place(x, y, forcePlayerMark = false) {
        var mark = this.getCurrentPlayerMarker();
        if (forcePlayerMark !== false && process.env.NODE_ENV === 'test') {
            mark =  forcePlayerMark;
        }

        if (x > this.size || x < 0 || y > this.size || y < 0) {
            throw '[' + x + '][' + y + '] is outside the map-area, try again ' + mark;
        }
        if (this.map[x][y] !== undefined) {
            throw '[' + x + '][' + y + '] already taken by ' + this.map[x][y] + ', try again ' + mark;
        }
        this.map[x][y] = mark;
        this.turns += 1;
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
