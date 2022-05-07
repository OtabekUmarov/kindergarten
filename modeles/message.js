const {Schema, model} = require('mongoose')
const message = new Schema({
    createdAt: {
      type: Date,
      default: Date.now
    },
    fullname: String,
    email: String,
    phone: String,
    status:{
      type: Boolean,
      default:false
    },
    message: String,
})
module.exports = model('Message',message)