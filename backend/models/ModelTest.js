const mongoose = require('mongoose');
const config = require('../config');
const User = require('./UserModel');
const Group = require('./GroupModel');

mongoose.promise = global.Promise;
mongoose.connect(config.mongo.uri, {useNewUrlParser: true, useCreateIndex: true});
mongoose.set('debug', config.mongo.debug);

mongoose.connect('mongodb://localhost/tutor-db', function (err) {
    if (err) throw err;

    console.log('Successfully connected');

    var Dima = new User({
        _id: new mongoose.Types.ObjectId(),
        username: 'Dimon',
        password: 'superparol',
    });

    var neDima = new User({
        _id: new mongoose.Types.ObjectId(),
        username: 'neDimon',
        password: 'superparol23',
    });

    var meme = new Object({
        _id: new mongoose.Types.ObjectId(),
        user: Dima._id,
        role: 'tutor'
    });

    var nememe = new Object({
        _id: new mongoose.Types.ObjectId(),
        user: neDima._id,
        role: 'netutor'
    });

    var secondGroup = new Group ({
       _id: new mongoose.Types.ObjectId(),
       members: [],
       title: 'MEMES',
       description: 'blablabla',
       place: 'co-working',
       date: Date.now(),
       payment: 25000,
       subject: 'matan'
    });

    secondGroup.members.push(meme);
    secondGroup.members.push(nememe);

    secondGroup.save(function(err) {
        if (err) throw err;

        console.log('Group successfully saved.');

        Dima.save(function(err) {
            if (err) throw err;

            console.log('Dima successfully saved.');
        });

        neDima.save(function(err) {
            if (err) throw err;

            console.log('neDima successfully saved.');
        });
    });
});

