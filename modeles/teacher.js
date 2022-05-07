const {Schema, model} = require('mongoose')
const teacher = new Schema({
    createdAt: {
      type: Date,
      default: Date.now
    },
    fullname:String,
    type: String,
    img: String,
    phone: String,
    telegram: String,
})
module.exports = model('Teacher',teacher)