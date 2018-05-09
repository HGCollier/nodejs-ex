var http = require('http');
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

http.createServer(function (socket) {
    console.log('Socket connected.');

    socket.writeHead(200, {'Context-Type': 'text/plain'});
    socket.write("Here's some data.\nPort: " + port.toString());
    socket.end();

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