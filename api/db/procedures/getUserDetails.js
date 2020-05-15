const connection = require('../connection').dbConnection;

/**
 * @param(mobileNumber)
 */
exports.getUserDetails = function (phoneNumber, cb) {
    const client = connection();
    client.connect(err => {
        const collection = client.db("COLLABENGER").collection("C_USER");
        collection.find({
            phoneNumber
        }).toArray(function (err, docs) {
            if (err) return new Error("Not able to connect DB");
            client.close();
            cb(docs);
        });
    })

}
