# Maze API reference



Quick reference
---------------

| Method | Path | Description | More |
|-|-|-|
| GET | / | Return all available maps and resets the maze | [Link](#return-all-available-maps-and-resets-the-maze) |
| GET | /map/:map | Loads the map to the maze | [Link](#loads-the-map-to-the-maze) |
| GET | /maze/ | Walks in to the first room  | [Link](#walks-in-to-the-first-room) |
| GET | /maze/:roomId | Gets info about room | [Link](#gets-info-about-room) |
| GET | /maze/:roomId/:direction | Walks to an other room | [Link](#walks-to-an-other-room) |



[](#return-all-available-maps-and-resets-the-maze)
## GET /
Returns all available maps and resets the maze internally.

Response
```json
[
    "maze-of-doom.json"
]
```

[](#loads-the-map-to-the-maze)
## GET /map/:map
Loads the map to the maze

Response
```json
{
    "text":"New map selected."
}
```

[](#walks-in-to-the-first-room)
## GET /:maze
Gets content of first room. (Walks in to the first room)

Response
```json
{
    "desc": "You are in a dark room, you feel 2 doors in the dark dark room",
    "dirs": {
        "east":1,
        "south":3
    }
}
```

[](#gets-info-about-room)
## GEt /maze/:roomId
Gets info about the room

Response
```json
{
    "desc": "Room 5",
    "dirs": {
        "north": 2,
        "south": 8
    }
}
```

[](#walks-to-an-other-room)
## GET /maze/:roomId/:direction
Walks into next room from given roomId and gives the next rooms info.


Response
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
