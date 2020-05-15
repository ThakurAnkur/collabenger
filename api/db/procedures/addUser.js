const connection = require('../connection').dbConnection;

/**
 * @param(User{})
 */
exports.addUser = function (user, cb) {
    const client = connection();
    client.connect(err => {
        const collection = client.db("COLLABENGER").collection("C_USER");
        collection.insertOne(user,(err,docs) => {
            if (err) return new Error("Not able to connect DB");
            client.close();
            cb(docs);
        })
    })

}
