Instruction to exercise 4
==============================

### Before you start 

Start up the maze-server by execute the following command.

```bash
$ babel-node Maze/server.js
```

## Part 1

1. Create a script called "mazerunner.sh" and follow up with instructions from exercise 1, regarding script creation.
2. Use the [API](https://github.com/mosbth/linux/blob/master/example/Maze/api.md) for the maze to add the following functionality.
    * `mazerunner <url>` should call the url and show the response. 

## Part 2
**TODO** add part about saving maze-info, since it is stateless, in some faction. Ex saving the current-room and gameid on file. 
1. Use the [API](https://github.com/mosbth/linux/blob/master/example/Maze/api.md) for the maze to extend the `mazerunner`  with these functionalities 
    * `mazerunner init` should save down the game id and print the message.
    * `mazerunner maps` should return the available maps.
    * `mazerunner select <map>` should select the given map.
    * `mazerunner info` should giv information about the current room.
    * `mazerunner go north` should navigate to the north
    * `mazerunner go south` should navigate to the south
    * `mazerunner go east` should navigate to the east
    * `mazerunner go west` should navigate to the west

## Part 3
1. Extend the `mazerunner` even further    
**TODO** INPUT PART ABOUT WHILE-Loops AND THE OTHER


Reference and read more
------------------------------

[?](#)  
[Maze API](https://github.com/mosbth/linux/blob/master/example/Maze/api.md)  
[Bash tutorials](https://github.com/mosbth/linux/tree/master/tutorial/bash)

Revision history
------------------------------
2015-06-24 (foikila) Wrote first draft
2015-06-15 (lew) PA1 First try.
