const connection = require('../connection').dbConnection;
var mongo = require('mongodb');


exports.getChannelByUsers = function (channelId, cb) {
    const client = connection();
    client.connect(err => {
        const collection = client.db("COLLABENGER").collection("C_CHANNELS");
        collection.find({
            channelId
        }, function (err, docs) {
            if (err) throw new Error("Unable to Add Channel Id to user " + userIdArray);
            client.close();
            cb(docs);
        })
    })
}
