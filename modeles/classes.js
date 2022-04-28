const {Schema, model} = require('mongoose')
const classes = new Schema({
    createdAt: {
      type: Date,
      default: Date.now
    },
    title:String,
    text: String,
    age: String,
    total: String,
    time: String,
    money: String,
    img: String,
})
module.exports = model('Classes',classes)