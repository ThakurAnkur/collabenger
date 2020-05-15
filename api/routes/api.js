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

router.get('/addUser/:firstName/:lastName/:phoneNumber/:password', function (req, res, next) {
    const user = req.params;
    console.log("User ", user);

    require("../db/procedures/getUserDetails").getUserDetails(user.phoneNumber, function (docs) {
        if (docs.length == 0) {
            require("../db/procedures/addUser").addUser(user, function (docs) {
                if (docs.length == 0) {
                    res.send("User not crreated");
                }
                else {
                    res.json(docs);
                }
            })
        }
        else {
            res.send("User already present");
        }
    })


});


module.exports = router;
