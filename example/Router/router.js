/**
 * Router
 */

/* Example usage..

    var http = require('http');
    var router = new Router();

    // Write a simple route..
    router.get('/', function(req, res) {
        res.end('hello');
    });

    http.createServer(function (req, res) {
        router.route(req, res);
    }).listen(1337);
*/


var url = require('url');


class Router {

    constructor() {
        this.routes = [];
        this.methods = {
            'GET': 'get',
            'POST': 'post',
            'PUT': 'put',
            'DELETE': 'delete'
        };
    }

    add(method, path, handler) {
        // Push to the routes array.
        this.routes.push({
            method: method,
            path: path,
            handler: handler
        });
    }

    /**
     * Shorthand GET route
     */
    get(path, handler) {
        this.add('GET', path, handler);
    }

    /**
     * Shorthand POST route
     */
    post(path, handler) {
        this.add('POST', path, handler);
    }

    /**
     * Route
     * @param  {[type]} req [description]
     * @param  {[type]} res [description]
     * @return {[type]}     [description]
     */
    route(req, res) {
        // Get the path and the method. ('/foo' and 'GET')
        var path = url.parse(req.url).pathname;
        var method = req.method;
        console.log('Path:', path, 'Method:', method);

        // Filter out the routes to process..
        var routesToProcess = this.routes.filter(function (r) {
            return method === r.method && path === r.path;
        });

        console.log('Routes to process: ', routesToProcess);

        // If we have no routes
        if (!routesToProcess || routesToProcess.length == 0) {
            console.log(404);
            res.writeHead(404);
            res.end('404 Not Found');
            return;
        }

        // Handle the request.
        routesToProcess.forEach(function (route, i) {
            // Calling the function.
            route.handler(req, res);
        });
    }
}

export default Router;
