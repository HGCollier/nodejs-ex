var http = require('http');
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

function onRequest (request, response) {
    console.log('User made a request: ' + request);
    response.writeHead(200, {'Context-Type': 'text/plain'});
    response.write("Here's some data.\nPort: " + port.toString());
    response.end();
}

http.createServer(function (socket) {
    onRequest();
    console.log('Socket connected.');

    socket.on('error', function(error) {
        console.log('Error: ' + error.toString());
    });

    socket.on('end', function() {
        console.log('Socket disconnected.');
    });

    socket.on('data', function(data) {
        console.log('Socket data: ' + data.toString());
    });
}).listen(port);
console.log('Server is running...');