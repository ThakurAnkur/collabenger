var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource APIIIIIIIIII');
});

router.get('/getUser/:phoneNumber', function (req, res, next) {
    const userRequests = req.params;
    console.log("User Requests", userRequests);
    require("../db/procedures/getUserDetails").getUserDetails(userRequests.phoneNumber, function (docs) {
        if (docs.length == 0) {
            res.send("No Such USer");
        }
        else {
            res.json(docs);
        }
    })
});

module.exports = router;
