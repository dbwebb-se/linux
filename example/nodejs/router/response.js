module.exports = function buildResponse (req, res) {
    res = res || {};


    res.send = function send(body, contentType, statusCode) {

        /*console.log('ARGS:', body);
        console.log(res._headers);*/

        // Ensure charset is set.
        res.charset = res.charset || 'utf-8';
        res.statusCode = statusCode || res.statusCode || 200;

        res.body = body;
        res.headers = 'text/html';


        if (contentType) {
            this.setHeader('Content-Type', contentType);
        } else {
            this.setHeader('Content-Type', 'text/html');
        }

        switch (typeof body) {
            case 'string':
                if (!this.get('Content-Type')) {
                    this.setHeader('Content-Type', 'text/html');
                }
            break;

            case 'boolean':
            case 'number':
            case 'object':
                if (body === null) {
                    body = '';
                }

                body = JSON.stringify(body);

            break;
        }

        res.write(body, statusCode);
        res.end();
    };

    res.json = function sendJson(body) {
        if (!this.get('Content-Type')) {
            this.setHeader('Content-Type', 'application/json');
        }
        return res.send(body, 'application/json', 200);
    };

    res.get = function(field) {
        return this.getHeader(field);
    };

    return res;
};
