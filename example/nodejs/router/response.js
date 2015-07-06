module.exports = function buildResponse (req, res) {
    res = res || {};


    res.send = function send(body, statusCode) {

        console.log('ARGS:', body);
        console.log(res._headers);

        // Ensure charset is set.
        res.charset = res.charset || 'utf-8';
        res.statusCode = statusCode || res.statusCode || 200;

        res.body = body;




        if (typeof body === 'object') {
            try {
                body = JSON.stringify(body);
            } catch (e) {

                console.error('failed to stringify in send function');

                res.statusCode = 500;
            }

        }
        res.write(body);
        res.end();
    };

    res.json = function sendJson(body, statusCode) {
        return res.send(body, statusCode || 200);
    };

    //console.log(res);

    return res;
};
