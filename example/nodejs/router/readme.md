
# Router module

Below you find examples on how to use the route module.

```js
import Router from '../router/router';

var router = new Router();

// A simple route responding on GET
router.get('/dog', (req, res) => {
    res.end('woff');
});

// A simple route with a named-parameter
router.get('/animal/:id', (req, res) => {
    // Get the parameter from the request object
    var id = req.params.id;
    res.end('Animal: ' + id);
});

// You can add more named-parameters like this
router.get('/animal/:id/:name', (req, res) => {
    var id = req.params.id;
    var name = req.params.name;
    res.end('Animal: ' + id + ' ' + name );
});

// Below you can see how to get the parameter q
router.get('/', (req, res) => {
    // To get the query parameters you do like this
    var queryParam = req.query.q;
    res.end(queryParam);
});

// Below you can see how to get any post data
router.post('/', (req, res) => {
    // Parsed object of the posted data
    var body = req.body.myVarThatIsentFromClient;
    console.log('from post:', body);
    res.end(200);
});

// Create the server using the router.
http.createServer((req, res) => {
    router.route(req, res);
}).listen(1337);
```

Checkout [usage.js](https://github.com/mosbth/linux/blob/master/example/nodejs/router/usage.js) to view more examples on how to use the Router.
