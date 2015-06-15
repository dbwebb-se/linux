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

        this.validRegex = {
            ':id': /[0-9]/,
            ':name': /[a-zA-Z]+/,
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

        req.params = {};
        // Get the path and the method.
        var path = url.parse(req.url).pathname;
        var method = req.method;

        // If path end with /, remove it
        if (path.indexOf('/', path.length - '/'.length) !== -1) {
            path = path.substr(0, path.length - 1);
        }

        var urlParams = path.split('/');

        // Filter out the routes to process..
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        var routesToProcess = this.routes.filter(function (r) {

            var params = r.path.split('/');
            // Get params.
            var currentParams = params.filter(function (p) {
                return p.includes(':');
            });

            /*
                /animal/:name
                /animal/dog

                /animal/:name/:id
                /animal/dog/1
            */

            if (params.length !== urlParams.length) {
                return false;
            }

            if (currentParams.length > 0) {
                var found = [];

                for (var i = 0; i < urlParams.length; i ++) {
                    if (params[i].includes(':')) {
                        found.push(urlParams[i]);
                    }
                }

                if (found.length > 0) {
                    currentParams.forEach((el, i) => {
                        req.params[el.substr(1, el.length)] = found[i];
                    });
                    return true;
                }
                return false;
             }

            // Without regex.
            return method === r.method && path === r.path;
        });

        // If we have no routes, write 404.
        if (!routesToProcess || routesToProcess.length === 0) {
            console.log(404);
            res.writeHead(404);
            res.end('404 Not Found');
            return;
        }
        console.log('--------------');
        console.log('Routes to process: ', routesToProcess);
        console.log('--------------');


        // Handle the request.
        routesToProcess.forEach(function (route, i) {
            // Calling the function.
            route.handler(req, res);
        });
    }

    nrOfRoutes() {
        return this.routes.length;
    }

    params() {
        return { name: 'dog' };
    }
}

export default Router;
