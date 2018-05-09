var http = require('http');
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

function onRequest (request, response) {
    console.log('User made a request: ' + request.url);
    response.writeHead(200, {'Context-Type': 'text/plain'});
    response.write('Heres some data.');
    response.end();
}

http.createServer(onRequest).listen(port);
console.log('Server is running.');