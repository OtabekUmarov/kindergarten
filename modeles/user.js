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
    payment: {
      type: String,
      default: 'not_paid'
    },
    card: {
        type: Object,
        default: {}
    },
    resetToken: String,
    resetTokenExp: Date,
})
module.exports = model('User',user)