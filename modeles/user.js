const {Schema, model} = require('mongoose')
const user = new Schema({
    name: { type: String, required: true },
    lname: String,
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    resetToken: String,
    resetTokenExp: Date,
})
module.exports = model('User',user)