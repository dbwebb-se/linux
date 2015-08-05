Instruction to exercise 5
==============================

**TODO input part about moveing `maze/` to right directory** 

Part 1
------
Extend the already existing fiveInRow-core. 
Implement the `getWinner()`-function. 
You can verify the winner by executeing npm test (om vi ska ha med testerna för getWinner() i examples, detta kommer bryta builden).

Part 2
------

Utilize the fiveInRow-core to build your own fiveInRow-API.

### Requirements
1. The game must be written in javascript.
2. The server must be named fiveInRowServer
3.  Sending a GET-method on `/` must initialize the game and respond with the game id, game board and who will start placing marker.
4. Sending a GET-method on `/map` with the game id as a query-parameter must respond with the game board. 
5. Sending a POST-method on `/place` must place a marker on given `row` and `column`. The request must contain the game id, row and the column where to place the marker.

Part 3
------
Utilize the fiveInRow-API to build your own fiveInRow-game via a CLI-program.

### Requirements
1. The game must be written in javascript.
2. The game must be a [CLI-program](https://en.wikipedia.org/wiki/Command-line_interface).
3. The CLI-program must be named `fiveInRowCli.js`
4. CLI-options
    - `fiveInRowCli.js --version` must display the scripts version number
    - `fiveInRowCli.js -v` could display the script version number
    - `fiveInRowCli.js --help` should give information and options on how to start the game.
    - `fiveInRowCli.js -h` could give information and options on how to start the game.
    - `fiveInRowCli.js --start` should start the game and "go into" the menu-loop.
5. The game should implement the following functionality
    - When the game start it must display a menu.
    - Player must be able to place a mark with given row, column - number
    - Player must be able to quit by either writing `Quit` or `Exit`
    - The game must check if a player has won after every placed mark.
    - The game must display the game board after every placed mark.
    - When a player places a marker where a marker already exist it should display an error message telling the player it did something wrong.
    
#### Extra
- Display the game board in ascii-art.
- When running the game, you could be able to write `help [command]` and it should display usage of that "command".


### Exampel on solution
[![asciicast](https://asciinema.org/a/23190.png)](https://asciinema.org/a/23190)

Reference and read more
------------------------------

[?](#) **TODO - Fix a reference to the book**     
[Read from commandline with nodejs, example](https://github.com/mosbth/linux/tree/master/example/nodejs/readFromCommandLine)     
[Build a menu loop in nodejs]()    
[Run nodejs program as cli-script with shebang, tutorial](https://github.com/mosbth/linux/tree/master/tutorial/nodejs/createExecuteable.md)     
[Read cli input, nodejs](https://github.com/mosbth/linux/tree/master/tutorial/nodejs/read-cli-input-nodejs.md)    

Revision history
------------------------------
2015-07-09 (foikila) Updated instructions and "read more".    
2015-06-30 (foikila) Initial draft.
