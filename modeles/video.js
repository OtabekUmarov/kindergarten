const {Schema, model} = require('mongoose')
const video = new Schema({
    title: {
      type: String,
      default: null,
    },
    url: {
      type: String,
      default: null,
    },
})
module.exports = model('Video',video)