/**
 * Front for GomokuServer
 */

// The main class for the Gomoku game
import GomokuBoard from "./GomokuBoard.js";

// Import the http server as base
var http = require("http");



/**
 * Class for Gomoku board.
 *
 */
class GomokuClient {



    /**
     * Constructor.
     *
     */
    constructor() {
        this.gameBoard = new GomokuBoard();
    }



    /**
     * Set the url of the server to connect to.
     *
     * @param  String url to use to connect to the server.
     *
     */
    setServer(url) {
        this.server = url;
    }



    /**
     * Make a HTTP GET request, wrapped in a Promise.
     *
     * @param  String url to connect to.
     *
     * @return Promise
     *
     */
    httpGet(url) {
        return new Promise((resolve, reject) => {
            http.get(this.server + url, (res) => {
                var data = "";

                res.on('data', (chunk) => {
                    data += chunk;
                }).on('end', () => {
                    if (res.statusCode === 200) {
                        resolve(data);
                    } else {
                        reject(data);
                    }
                }).on('error', (e) => {
                    reject("Got error: " + e.message);
                });
            });
        });
    }



    /**
     * Prepare the game by creating an empty board of the specified size.
     *
     * @param  Integer size Inital size on the gameboard.
     *
     * @return Promise
     *
     */
    start(size = 20) {
        return this.httpGet("/start/" + size);
    }



    /**
     * View the content of the game.
     *
     * @param  Integer size Inital size on the gameboard.
     *
     * @return Promise
     *
     */
    view() {
        return this.httpGet("/view/ascii");
    }


    /**
     * Place the marker at the position.
     *
     * @param  Integer x
     * @param  Integer y
     *
     * @return Promise
     *
     */
    place(x, y) {
        return this.httpGet("/place/" + x + "/" + y);
    }
}

export default GomokuClient;
