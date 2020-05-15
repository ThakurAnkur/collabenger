const MongoClient = require('mongodb').MongoClient;
const username = "collabenger";
const password = "166n5QNIBcSD6pEr";
const uri = `mongodb+srv://${username}:${password}@cluster0-gxtxd.mongodb.net/test?retryWrites=true&w=majority`;

exports.dbConnection = function () {
    return new MongoClient(uri, { useNewUrlParser: true });
}