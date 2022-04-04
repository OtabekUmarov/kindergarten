const {Schema, model} = require('mongoose')
const gallery = new Schema({
    img: String,
    type: {
      type: String,
      default: '*'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
})
module.exports = model('Gallery',gallery)