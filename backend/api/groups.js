const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserModel = require('../models/UserModel');
const GroupModel = require('../models/GroupModel');

/* GET users listing. */
router.post('/', function (req, res, next) {  // register new user
    passport.authorize('jwt', {session: false}, (err, user, info) => {
        if (err) {
            res.status(403).send({error: 'Auth failed'});
        } else {
            GroupModel.create(Object.assign(req.body, {owner: user._id}))
                .then((group) => {
                    group.save().then(() => {
                        res.send(group);
                    })

                })
                .catch((err) => {
                    res.statusCode = 500;
                    res.send({err});
                })
        }

    })(req, res, next);
});

router.get('/', function (req, res, next) {  // get own user data
    GroupModel.find({})
        .then((groups) => {
            res.send(groups)
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send({err});
        })
});

router.get('/:_id', function (req, res, next) {  // get own user data
    GroupModel.findOne({
        _id: req.params._id
    })
        .then((groups) => {
            res.send(groups)
        })
        .catch((err) => {
            res.statusCode = 500;
            res.send({err});
        })
});

router.delete('/:_id', function (req, res, next) {
    passport.authorize('jwt', {session: false}, (err, user, info) => {
        if (err) {
            res.status(403).send({error: 'Auth failed'});
        } else {
            GroupModel.deleteOne({
                _id: req.params._id,
                owner: user._id
            }).then(({deletedCount}) => {
                    if (deletedCount === 0) {
                        throw {
                            message: 'Nothing deleted'
                        }
                    }
                    res.statusCode = 200;
                    res.send();
                }
            ).catch((err) => {
                res.statusCode = 500;
                res.send({err});
            })
        }
    })(req, res, next);
});
console.log('Some text');
module.exports = router;
