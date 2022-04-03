const {
  Router
} = require('express')
const router = Router()

const Gallery = require('../modeles/gallery')


router.get('/',async (req, res) => {
  let gallery = await Gallery.find().lean()
  res.render('admin/gallery', {
      title: 'Gallery',
      layout: "admin",
      success: req.flash('success'),
      error: req.flash('error'),
      isAdminGallery: true, 
      gallery
  })
})


module.exports = router