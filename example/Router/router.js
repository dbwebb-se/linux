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

    /**
     * Add a route
     * @param String    method  The method e.g GET/POST/PUT/DELETE
     * @param String    path    The path to the route
     * @param Function  handler The function for the route.
     */
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
     * @param  String   path    The path to the route
     * @param  Function handler The function for the route.
     */
    get(path, handler) {
        this.add('GET', path, handler);
    }

    /**
     * Shorthand POST route
     * @param  String   path    The path to the route
     * @param  Function handler The function for the route.
     */
    post(path, handler) {
        this.add('POST', path, handler);
    }

    /**
     * Route
     * @param  Object req HTTP request object
     * @param  {[type]} res HTTP response object
     */
    route(req, res) {

        req.params = {};
        // Set the request query to the request object.
        req.query = url.parse(req.url, true).query;

        // Get the path and the method.
        var path = url.parse(req.url).pathname;
        var method = req.method;
        // Remove trailing slashes from the path.
        if (path.length > 1 && path.indexOf('/', path.length - '/'.length) !== -1) {
            path = path.substr(0, path.length - 1);
        }
        // Split the path to get the parameters.
        var urlParams = path.split('/');

        // Filter out the routes to process..
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        var routesToProcess = this.routes.filter(function (r) {
            // remove trailing slash from the current path, if they exist.
            if (r.path.length > 1 && r.path.indexOf('/', r.path.length - '/'.length) !== -1) {
                r.path = r.path.substr(0, r.path.length - 1);
            }

            // Split the current params.
            var params = r.path.split('/');

            // If the parameters lenght is not the same, it's not the route we are looking for.
            if (params.length !== urlParams.length) {
                return false;
            }

            // Get params.
            var currentParams = params.filter(function (p) {
                return p.includes(':');
            });

            var found = [];

            // Get all "special" params. :
            for (var i = 0; i < params.length; i ++) {
                if (params[i].includes(':')) {
                    found.push(urlParams[i]);
                }
            }

            // if we have special params.
            if (found.length > 0) {
                // Add the params to req.params.
                currentParams.forEach((el, i) => {
                    req.params[el.substr(1, el.length)] = found[i];
                });
            }
            var counter = 0;

            for (var i = 0; i < urlParams.length; i++) {
                //console.log('I: '+i, urlParams[i] === params[i], urlParams[i], params[i]);
                if (urlParams[i] === params[i] || params[i].includes(':')) {
                    counter++;
                }
            }

            return counter === urlParams.length && method === r.method;
        });

        // If we have no routes, write 404.
        if (!routesToProcess || routesToProcess.length === 0) {
            console.log(404);
            res.writeHead(404);
            res.end('404 Not Found');
            return;
        }

        /*console.log('--------------');
        console.log('Routes to process: ', routesToProcess);
        console.log('--------------');*/


        // Handle the request.
        routesToProcess.forEach(function (route, i) {
            // Calling the function.
            route.handler(req, res);
        });

    }
    /**
     * Returns the number of routes added.
     * @return Integer
     */
    nrOfRoutes() {
        return this.routes.length;
    }

}

export default Router;
