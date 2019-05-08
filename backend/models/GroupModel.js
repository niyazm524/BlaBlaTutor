const mongoose = require('mongoose');

const groupSchema = mongoose.Schema (
    {
        _id: mongoose.Schema.Types.ObjectId,
        members: [{
            _id: mongoose.Schema.Types.ObjectId,
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Users'
            },
            role: String
        }],
        title: String,
        description: String,
        place: String,
        date: Date,
        payment: Number,
        subject: String
    }
);

module.exports = mongoose.model('Groups', groupSchema);