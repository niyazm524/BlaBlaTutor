const mongoose = require('mongoose');

const groupSchema = mongoose.Schema(
    {
        //_id: mongoose.Schema.Types.ObjectId,
        members: [{
            _id: mongoose.Schema.Types.ObjectId,
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Users'
            },
            role: {type: String, required: true}
        }],
        title: {type: String, required: true},
        description: String,
        place: {type: String, required: true},
        date: {type: Date, required: true},
        payment: Number,
        subject: String,
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
            required: true
        }
    }
);


module.exports = mongoose.model('Groups', groupSchema);