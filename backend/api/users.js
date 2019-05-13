const express = require('express');
const router = express.Router();
const passport = require('passport');
const UserModel = require('../models/UserModel');

/* GET users listing. */
router.post('/', function (req, res, next) {  // register new user
    UserModel.create(req.body)
        .then((user) => {
            user.save().then(() => {
                res.send(user.toAuthJSON());
            })

        })
        .catch((err) => {
            res.statusCode = 500;
            if (err.code === 11000) res.send({status: 'error', message: 'User with this username already exists'});
            res.send({err});
        })
});

router.get('/self', function (req, res, next) {  // get own user data
    passport.authorize('jwt', {session: false}, (err, user, info) => {
        if (err) {
            res.status(403).send({error: 'Auth failed'});
        } else {
            res.send(user.getSafeData());
        }

    })(req, res, next);
});

module.exports = router;
