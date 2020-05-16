/**
 * All incoming data must be in this format
 * {
 *  method: '' Name of method to be called,
 * data: {...} Which needs to be passed to Method
 * }
 */
const WebSocketServer = require('websocket').server;
const supportedMethods = require('./supportedMethods').default;
var http = require('http');

var httpServer = http.createServer(function (request, response) {
    // Disable non websocket request
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
httpServer.listen(4542, function () {
    console.log((new Date()) + ' Starting WebSocket Listener server on 6666');
});

exports.default = function listenForWebSocket() {
    /**
     * Create WebSocket for push notifications and many more good stuff
     */
    wsServer = new WebSocketServer({
        httpServer: httpServer,
        // You should not use autoAcceptConnections for production
        // applications, as it defeats all standard cross-origin protection
        // facilities built into the protocol and the browser.  You should
        // *always* verify the connection's origin and decide whether or not
        // to accept it.
        autoAcceptConnections: false
    });

    function originIsAllowed(origin) {
        console.log("Reqeust from origin", origin);
        return true; // TODO: validate Origin
    }

    wsServer.on('request', function (request) {
        if (!originIsAllowed) {
            // Make sure we only accept requests from an allowed origin
            request.reject();
            logger.log("Add some logging stuff");
            console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
            return;
        }

        var connection = request.accept('ping', request.origin);
        console.log((new Date()) + 'PING Request');
        connection.send(JSON.stringify({ status: 'ok', message: 'PING OK' }));

        connection.on('message', function (message) {
            if (message.type === 'utf8') {
                let json = JSON.parse(message.utf8Data);
                if (json.method) {
                    supportedMethods.get(json.method)(json.data, message, connection);
                }
            }
            else if (message.type === 'binary') {
                console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
                connection.sendBytes(message.binaryData);
            }
        })
    });
}
