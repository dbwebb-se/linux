# Maze API reference


## GET /
Initialize the maze and generates a new gameid

Example `/`

*JSON response.*
```
{
    "text":"New game initialized",
    "gameid":"42580"
}
```

## GET /map
Returns a list of all available maps

*Example* `/map`

*JSON response.*
```json
[
    "maze-of-doom.json"
]
```

## GET /gameid/map/:map
Loads the map as the current maze

*Example* `/42580/map/maze-of-doom.json`

*JSON response*
```json
{
    "text":"New map selected."
}
```

## GET /gameid/maze
Gets content of first room. (Walks in to the first room)

*Example* `/42580/maze`

*JSON response.*
```json
{
    "roomid": 0,
    "description": "You are in a dark room, you feel 2 doors in the dark dark room",
    "directions": {
        "east":1,
        "south":3
    }
}
```

## GET /gameid/maze/:roomId
Gets info about the room

*Example* `/42580/maze/5`

*JSON response*
```json
{
    "roomid": 5,
    "description": "Room 5",
    "directions": {
        "north": 2,
        "south": 8
    }
}
```

## GET /gameid/maze/:roomId/:direction
Walks into next room from given roomId and gives the next rooms info.

*Example* `/42580/maze/0/north`

*JSON response.*
```json
{
    "roomid": 1,
    "description":"room 1",
    "directions": {
        "west":0,
        "east":2,
        "south":4
    }
}
```

Revision history
------------------------------

2015-06-24 (foikila) Added gameid      
2015-06-17 (foikila) First draft crafted
