const {Schema, model} = require('mongoose')
const gallerysubmenu = new Schema({
    title: {
      type: String,
      default: ''
    },
    menuId: {
      type: Schema.Types.ObjectId,
      ref: 'GalleryMenu'
  },
})
module.exports = model('GallerySubMenu',gallerysubmenu)