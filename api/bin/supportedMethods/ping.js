/**
 * 
 */
exports.default = function (data, message, connection) {
    console.log('PING', message, connection);
    console.log('Received Message: ' + message.utf8Data);
    connection.send(message.utf8Data);
}