Instruction to exercise 5
==============================

Part 1
------
Extend the already existing fiveInRow-game. Implement the core.winner() function. Verify the winner by executeing npm test.

Part 2
------
Utilize the fiveInRow-core to build your own fiveInRow-game via a CLI-program.

### Requirements
1. The game must be written in javascript.
2. The game must be a [CLI-program](https://en.wikipedia.org/wiki/Command-line_interface).
3. The CLI-program must be named "fiveInRowCli.js"
4. CLI-options
    - `fiveInRowCli.js --version` must display the scripts version number
    - `fiveInRowCli.js --help` should give information and options on how to start the game.
    - `fiveInRowCli.js --start` should start the game and "go into" the menu-loop.

5. The game should implement the following functionality
    - When the game start it must display Menu.
    - Player must be able to place a mark with giving x, y coordinates.
    - Player must be able to quit by writing `Quit`
    - The game must check if a player has won.
    - The game must display the game board after every placed mark.

#### Extra
Display the game board in ascii-art.

### Simulated game round
[![asciicast](https://asciinema.org/a/23190.png)](https://asciinema.org/a/23190)

Reference and read more
------------------------------

[?](#) **TODO - Fix a reference to the book**     
[Read from commandline with nodejs, example](https://github.com/mosbth/linux/tree/master/example/nodejs/readFromCommandLine)     
[Build a menu loop in nodejs]()    
[Run nodejs program as cli-script with shebang, tutorial]() **TODO write tutorial**    
[Read cli input, nodejs](https://github.com/mosbth/linux/tutorial/nodejs/read-cli-input-nodejs.md)    

Revision history
------------------------------

2015-06-30 (foikila) Initial draft.
