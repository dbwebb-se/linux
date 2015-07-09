Instruction to exercise 3
==============================

## Part 1
Write a server that response with different kind of content-types and data on different routes.

### Before you start
Copy the example server from `example/kmom04/` and place it in **INPUT me-PATH**.

You run the server by executing this command:
```bash
$ babel-node -- kmom04/index.js
```

### Requirements
1. The script should be named "index.js"
2. The server should respond on `/` and give `Hello world` in plain text. The content-type must be `text/plain`.
3. The server should respond on `/index.html` with reading the file `html.html` and serve it as a html-response. The content-type must be `text/html`.
4. The server should respond on `/status` with giving a JSON-response with info about the server and the current time. The content-type must be `application/json`.
5. The server should respond on `/sum` with reading the query parameters and summarize them and respond with giving the answer in JSON. The content-type must be `application/json`.
6. The server should respond on `/filter` with reading the query parameters and removing any parameter that is larger than 42 and respond with the filterd values. The content-type must be `application/json`.

## Part 2
Write a bash-client that communicate with the server you wrote in part 1.

1. Create a script called "myServer.sh" and follow up with instructions from exercise 1, regarding script creation.
2. "myServer.sh" should be able to print out "Hello world" with `myServer hello`.
3. "myServer.sh" should be able to print out the html.html file with `myServer html`.
4. "myServer.sh" should be able to print out the JSON status with `myServer status`.
5. "myServer.sh" should be able to print out the 404 message if wrong command is passed, for example `myServer fishy`.
6. Create a crontab that checks the servers status once/hour and puts the result in a file called "myServerStatus.txt".

## Extra assignment
1. "myServer.sh" should be able to print out the filtered values from the request `/filter`. The amount of query parameters should not matter.  

Reference and read more
------------------------------

[Examples](https://github.com/mosbth/linux/tree/master/example)
[Arrow-functions](https://github.com/mosbth/linux/blob/master/tutorial/nodejs/arrow-functions.md)
[List of Content-Types](https://en.wikipedia.org/wiki/Internet_media_type#List_of_common_media_types)
[Curl](https://github.com/mosbth/linux/blob/master/tutorial/bash/curl.md)
[crontab](http://www.computerhope.com/unix/ucrontab.htm)
[Crontab, tutorial](https://github.com/mosbth/linux/blob/master/tutorial/bash/crontab.md)  
[Functions, tutorial](https://github.com/mosbth/linux/blob/master/tutorial/bash/functions.md)

Revision history
------------------------------
2015-07-01 (lew) could be final version
2015-06-24 (foikila) Wrote first draft
2015-06-15 (lew) PA1 First try.
