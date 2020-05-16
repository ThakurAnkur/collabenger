const connection = require('../connection').dbConnection;

var mongo = require('mongodb');


/**
 * @param(User{})
 */
exports.addSessionKey = function (objectId,sessionId, cb) {
    const client = connection();

    client.connect(err => {
        const collection = client.db("COLLABENGER").collection("C_USER");

        var o_id = new mongo.ObjectID(objectId);
        collection.update({ _id: o_id }, { $set: { sessionId: sessionId } }, function (err, docs) {
            if (err){
                return new Error("Not able to connect DB 1321");
            }
            client.close();
            cb(docs);
        });

        collection.find({
            objectId
        }).toArray(function (err, docs) {
            if (err) return new Error("Not able to connect DB");
            client.close();
            cb(docs);
        });
    })

}
