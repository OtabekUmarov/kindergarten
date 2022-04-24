const {Schema, model} = require('mongoose')
const gallery = new Schema({
    img: String,
    createdAt: {
      type: Date,
      default: Date.now
    },
    menuId: {
      type: Schema.Types.ObjectId,
      ref: 'GallerySubMenu'
    },
    menu: {
      type: Schema.Types.ObjectId,
      ref: 'GalleryMenu'
    },
})
module.exports = model('Gallery',gallery)