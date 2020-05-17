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
            console.log("--->", req.session, req.sessionID);
            res.json(docs);
        }
    })
});

router.get('/addUser/:firstName/:lastName/:phoneNumber', function (req, res, next) {
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


// router.get('/login/:phoneNumber', function (req, res, next) {
//     const userRequests = req.params;
//     console.log("User Requests", userRequests);
//     require("../db/procedures/getUserDetails").getUserDetails(userRequests.phoneNumber, function (docs) {
//         if (docs.length == 0) {
//             res.send("No Such USer");
//         }
//         else {
//            // req.session.userid = docs[0]._id;
//             require("../db/procedures/addSessionKey").addSessionKey(docs[0]._id, req.sessionID, function (docs) {
//                 res.json(docs);
//             })
//             console.log("--->", req.session, req.sessionID);
//         }
//     })
// });

router.get('/search/:phoneNumber', function (req, res, next) {
    const userRequests = req.params;
    require("../db/procedures/getUserDetails").getUserDetails(userRequests.phoneNumber, function (docs) {
        if (docs.length == 0) {
            res.send("No Such USer");
        }
        else {
            res.json(docs[0]);
        }
    })
});

router.get('/generateChannelId/:senderId/:recieverId', function (req, res, next) {
    const params = req.params;
    require("../db/procedures/generateChannelId").generateChannelId(params.senderId, params.recieverId, function (docs) {
        res.json(docs);
    })
});




module.exports = router;
