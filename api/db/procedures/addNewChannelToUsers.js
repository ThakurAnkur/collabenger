const connection = require('../connection').dbConnection;
var mongo = require('mongodb');


exports.addNewChannelToUsers = function (userIdArray, channelId, cb) {
    const client = connection();
    const mongoIds = [];
    for (let i = 0; i < userIdArray.length; i++) {
        mongoIds[i] = new mongo.ObjectID(userIdArray[i]);
    }
    client.connect(err => {
        const collection = client.db("COLLABENGER").collection("C_USER");
        collection.updateMany({
            _id: { $in: mongoIds }
        }, {
            $push: {
                channelList: { $each: [channelId] }
            }
        }, function (err, docs) {
            if (err) throw new Error("Unable to Add Channel Id to user " + userIdArray);
            client.close();
            cb(docs);
        })
    })
}
