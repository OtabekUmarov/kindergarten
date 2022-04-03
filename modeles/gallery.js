const {Schema, model} = require('mongoose')
const gallery = new Schema({
    img: String,
    type: {
      type: String,
      default: '*'
    }
})
module.exports = model('Gallery',gallery)