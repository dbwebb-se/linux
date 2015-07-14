Instruction to exercise 4
==============================

### Before you start

Start up the maze-server by execute the following command.

```bash
$ babel-node -- maze/index.js
```

## Part 1

1. Create a script called "mazerunner.sh" and follow up with instructions from exercise 1, regarding script creation.
2. Use the [API](https://github.com/mosbth/linux/blob/master/example/nodejs/maze/api.md) for the maze to extend the `mazerunner` with these functionalities (think about that some information have to be resused and saved to file. Add "?type=csv" in the end of your curl, i.e. "curl localhost:1337/map?type=csv", to get the response comma-separated)  
   * `mazerunner init` should save down the game id and print the message.
   * `mazerunner maps` should return the available maps.
   * `mazerunner select <map>` should select the given map.
   * `mazerunner info` should give information about the current room.
   * `mazerunner enter` should enter the first room
   * `mazerunner go north` should navigate to the north
   * `mazerunner go south` should navigate to the south
   * `mazerunner go east` should navigate to the east
   * `mazerunner go west` should navigate to the west

## Part 2
1. Extend the `mazerunner` even further
    * `mazerunner loop` should enter a loop where the script is listening for input.
    * `mazerunner` should automatically init a new game and present the maps, for example:  
    ```sh
    1. maze-of-doom  
    2. simple-maze  
    Choose map:  
    ```  
    * Then `mazerunner` should listen on `north, south, west, east and done (to quit)`



Reference and read more
------------------------------
[API](https://github.com/mosbth/linux/blob/master/example/nodejs/maze/api.md)  
[Bash tutorials](https://github.com/mosbth/linux/tree/master/tutorial/bash)

Revision history
------------------------------
2015-06-24 (foikila) Wrote first draft
2015-06-15 (lew) PA1 First try.
