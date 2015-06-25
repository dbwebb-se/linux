import maze from '../Maze/maze';

var PORT = 1337;

maze.listen(PORT);
console.log('The maze server is now listening on: ' + PORT);
