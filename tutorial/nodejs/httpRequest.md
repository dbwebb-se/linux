# Send http-request to a server with nodejs

Since the most common request method is a GET-request, nodejs have created a 
shorthand-function for just this request. `http.get()`. Here is an example on 
how to use it.

```javascript
// include the required nodejs-module
var http = require('http');

http.get({
    hostname: 'www.google.com',
    path: '/'
}, (response) => {
    // Somewhere to store the incoming data
    var body = '';
    
    // The event that is fired when the module 
    // retrieves the data from the request.
    response.on('data', (chunkOfData) => {
        body += chunkOfData;
    });   
    // The event that is fired when the module has
    // retrieved all the data from the request.
    // And we want to do something with it
    response.on('end', () => {
        console.info('The _fullresponse_');
        console.log(body);
    });
}).on('error', (e) => {
    console.log(e.message);
});
```

But when you don't want to send a GET-request or you _most_ send a request with 
an other request method, nodejs have a function named `http.request()`.
Here is an example on how to use it.

```javascript
var querystring = require('querystring');
var http        = require('http');

var postData = querystring.stringify({
  'msg' : 'Hello World!'
});

var options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/upload',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
};

var req = http.request(options, (res) => {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', (e) => {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.write(postData);
req.end();
```

Reference and read more
------------------------------

[HTTP, nodejs](https://nodejs.org/api/http.html)

Revision history
------------------------------

2015-08-4 (foiki) Initial draft.
