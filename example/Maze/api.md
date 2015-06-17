# Maze API reference


## GET /
Returns a list of all available maps and resets the maze internally.

*JSON response.*
```json
[
    "maze-of-doom.json"
]
```

## GET /map/:map
Loads the map to the maze

*Example* `/map/maze-of-doom`

*JSON response*
```json
{
    "text":"New map selected."
}
```

## GET /maze
Gets content of first room. (Walks in to the first room)

*JSON response.*
```json
{
    "desc": "You are in a dark room, you feel 2 doors in the dark dark room",
    "dirs": {
        "east":1,
        "south":3
    }
}
```

## GET /maze/:roomId
Gets info about the room

*Example* `/maze/0`

*JSON response*
```json
{
    "desc": "Room 5",
    "dirs": {
        "north": 2,
        "south": 8
    }
}
```

## GET /maze/:roomId/:direction
Walks into next room from given roomId and gives the next rooms info.

*Example* `/maze/0/north`

*JSON response.*
```json
{
    "desc":"room 1",
    "dirs": {
        "west":0,"east":2,"south":4
    }
}
```

Revision history
------------------------------

2015-06-17 (foikila) First draft crafted
