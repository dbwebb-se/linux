Install essentials to get going with examples
===============================================

In this folder you will find examples written to make the day easier for you. These are the steps to install the program and utilities you need to run the example programs.



Install Node.js and npm packetmanager
------------------------------------------------

This is this way to install `nodejs` and `npm` and verify that it works.

```bash
$ sudo apt-get install nodejs npm
$ nodejs --version
$ npm --version
```



Install `babel-node` for ECMAScript 6
------------------------------------------------

To run the JavaScript files written i ECMAScript 6 you need to first follow these steps. The command `babel-node` runs node but precompiles your JS-files first by compiling ECMAScript6 to ordinary JS.

Read about [babeljs](https://babeljs.io/).


###Install `babel-node` using `npm`

```bash
$ sudo npm install -g babel
$ babel-node --version
```

You will most likely get an error on Debian saying:

```
$ babel-node --version
/usr/bin/env: node: No such file or directory
```

Babel thinks that the executable is named `node`, but on Debian its named `nodejs`. So we have to edit the first row in the script, the [shebang-row](https://en.wikipedia.org/wiki/Shebang_%28Unix%29).  

Open up the script in your favorite editor.

```bash
$ sudo vim $( which babel-node )
```

Edit the first row to look like this:

```bash
#!/usr/bin/env nodejs
```

Save the file and try again. You should now see the version number of `babel-node`.

```bash
$ babel-node --version
```



Start you first example program
------------------------------------------------

Lets start a webserver-like server. You find it in the example [`simpleServer`](simpleServer).

| File              | Description |
|-------------------|-------------|
| `server.js`       | Module creating a server. |
| `server.test.js`  | Unit testing for the module `server.js`. |
| `index.js`        | Main program that starts up the server. |

Start the server by running the main-program.

```bash
$ babel-node index.js
```

Use curl, or you web browser, to try out the server.

```bash
$ curl http://localhost:1337/
```



Other useful utilities
------------------------------------------------



###Nodemon restarts your server.

When you code and need to restart the program/server each time you eventually get a bit tired of doing that. The command `nodemon` then comes to your aid.

The command [nodemon](http://nodemon.io/) keeps track on changes in your sourcecode and restarts the server each time you save the file. It can save you some keypresses and time.

```bash
$ sudo npm install -g nodemon
$ nodemon --version
$ nodemon
```

Run `nodemon` toghether with `babel-node`.

```bash
$ nodemon --exec babel-node --stage 0 -- path/to/file.js
```



Info about packages in packages.json
------------------------------------------------

 TODO
