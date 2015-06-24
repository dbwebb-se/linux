Instruction to exercise 4
==============================

## Part 1
Write a server that response with different kind of content-types and data on different routes. 

### Requirements
1. The server should be named server.js
2. The server should respond on `/` and give `Hello world` in plain text. The content-type should be `text/plain`.
3. The server should respond on `/html.html` with reading the file `html.html` and serve it as a html-response. The content-type should be `text/html`.
4. The server should respond on `/status` with giving a JSON-response with info about the server and the current time. The content-type should be `application/json`.
5. The server should respond on `/zip` with reading a zip-file and serve it as `application/zip`. The content-type must be `application/zip`.
6. If a route is not found the server should respond with a 404 and a message in plain text. The content-type should be `text/plain`.

## Part 2
Write a bash-client that communicate with the server you wrote.

1. The client should curl localhost:1337/ and get a response message saying `Hello world`.
2. The client should curl localhost:1337/status and get a response telling the client how it feels at the moment. The response should be in JSON.

Reference and read more
------------------------------

[Examples](https://github.com/mosbth/linux/tree/master/example)    
[List of Content-Types](https://en.wikipedia.org/wiki/Internet_media_type#List_of_common_media_types)    
[?](#) **TODO - Fix a reference to the book**



Revision history
------------------------------
2015-06-24 (foikila) Wrote first draft    
2015-06-15 (lew) PA1 First try. 
