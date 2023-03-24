const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name required!"]
    },
    email: {
        type: String,
        required: [true, "A valid email is required!"]
    },
    age: {
        type: Number,
        required: [true, "Age is required!"]
    },
    gender: {
        type: String,
        required: [true, "Choose your gender!"]
    },
    password: {
        type: String,
        required: [true, "Set your password!"]
    },
}, {timestamps: true})

module.exports = mongoose.model('user', userSchema)