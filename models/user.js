const mongoose = require('mongoose')
const Box = require("./box")

const userschema = mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required: true
    },
    phonenumber: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,

    },
    boxowner: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Box
    }],

}, {
    timestamps: true
});


module.exports = mongoose.model("User", userschema);