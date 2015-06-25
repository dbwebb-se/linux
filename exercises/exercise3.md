Instruction to exercise 3
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
Write a bash-client that communicate with the server you wrote. (localhost:1337/???)

1. Create a script called "myServer.sh" and follow up with instructions from exercise 1.
2. "myServer.sh" should be able to print out "Hello world" with `myServer hello`.
3. "myServer.sh" should be able to print out the html.html file with `myServer html`.
4. "myServer.sh" should be able to print out the JSON status with `myServer status`.
5. "myServer.sh" should be able to print out the 404 message if wrong command is passed, for example `myServer fishy`.
6. Create a crontab that checks the servers status once/hour and puts the result in a file called "myServerStatus.txt".

Reference and read more
------------------------------

[Examples](https://github.com/mosbth/linux/tree/master/example)  
[List of Content-Types](https://en.wikipedia.org/wiki/Internet_media_type#List_of_common_media_types)  
[Curl](https://github.com/mosbth/linux/blob/master/tutorial/bash/curl.md)  
[Crontab](http://www.computerhope.com/unix/ucrontab.htm)  
[Crontab, tutorial](https://github.com/mosbth/linux/blob/master/tutorial/bash/crontab.md)  

Revision history
------------------------------
2015-06-24 (foikila) Wrote first draft
2015-06-15 (lew) PA1 First try.
