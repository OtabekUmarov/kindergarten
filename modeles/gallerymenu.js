const {Schema, model} = require('mongoose')
const gallerymenu = new Schema({
    title: {
      type: String,
      default: ''
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
})
module.exports = model('GalleryMenu',gallerymenu)