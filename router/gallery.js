const {
  Router
} = require('express')
const { type } = require('os')
const router = Router()

const Gallery = require('../modeles/gallery')


router.get('/',async (req, res) => {
  let gallery = await Gallery.find().lean()
  gallery = gallery.map(item => {
    return {
      ...item,
      type: item.type == '*' ? 'Barchasi' : item.type == 'first' ? 'Playing' : item.type == 'second' ? 'Drawing' : 'Reading'
    }
  })
  res.render('admin/gallery', {
      title: 'Gallery',
      layout: "admin",
      success: req.flash('success'),
      error: req.flash('error'),
      isAdminGallery: true, 
      gallery
  })
})
router.post('/', async (req, res) => {
  const { type } = req.body
  let img = req.file.path
  const gallery = await new Gallery({type,img})
  await gallery.save()
  res.redirect('/admin/gallery')
})
router.get('/delete/:id', async (req, res) => {
  let _id = req.params.id
  await Gallery.findByIdAndDelete(
    _id
  )
  res.redirect('/admin/gallery')
})
module.exports = router