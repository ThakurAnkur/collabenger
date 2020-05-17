const connection = require('../connection').dbConnection;

exports.generateChannelId = function (senderId, receiverId, cb) {
    const client = connection();
    client.connect(err => {
        const collection = client.db("COLLABENGER").collection("C_CHANNELS");
        let randomTime = +new Date();
        let channelId = "C_" + randomTime + Math.random(randomTime);
        collection.insertOne({
            channelId
        }, (err, newChannelDetails) => {
            if (err) throw new Error("Unable to create new Channel");
            require("./addNewChannelToUsers").addNewChannelToUsers([senderId, receiverId], channelId, (docs) => {
                client.close();
                cb(newChannelDetails);
            })
        });
    })

}
