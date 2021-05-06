const mongoose = require('mongoose');
const User = require('./user')

const boxschema = mongoose.Schema({
    boxid: {
        type: String,
        required: true,
        unique: true
    },
    qrcode: {
        type: String,
        required: true,
        unqiue: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }]

}, { timestamps: true });

module.exports = mongoose.model("Box", boxschema);

