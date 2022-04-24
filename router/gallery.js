const {
  Router
} = require('express')
const router = Router()

const Gallery = require('../modeles/gallery')
const GalleryMenu = require('../modeles/gallerymenu')
const GallerySubMenu = require('../modeles/gallerysubmenu')


router.get('/',async (req, res) => {
  let menu = await GalleryMenu.find().lean()
  res.render('admin/gallery', {
      title: 'Gallery',
      layout: "admin",
      success: req.flash('success'),
      error: req.flash('error'),
      isAdminGallery: true, 
      menu
  })
})
router.get('/photos/:id',async (req, res) => {
  let menu = await GalleryMenu.findOne({_id:req.params.id}).lean()
  let submenu = await GallerySubMenu.find({menuId:req.params.id}).lean()
  let photos = await Gallery.find().populate('menuId').lean()
  res.render('admin/gallery/photos', {
      title: 'Gallery',
      layout: "admin",
      success: req.flash('success'),
      error: req.flash('error'),
      isAdminGallery: true, 
      menu, submenu, photos
  })
})
router.post('/', async (req, res) => {
  const { menuId,menu } = req.body
  let img = req.file.path
  const gallery = await new Gallery({menuId,img, menu})
  await gallery.save()
  res.redirect(`/admin/gallery/photos/${menu}`)
})
router.post('/menu', async (req, res) => {
  const { title } = req.body
  const menu = await new GalleryMenu({title})
  await menu.save()
  res.redirect('/admin/gallery')
})
router.post('/submenu', async (req, res) => {
  const { title,menuId } = req.body
  const menu = await new GallerySubMenu({title,menuId})
  await menu.save()
  res.redirect(`/admin/gallery/photos/${menuId}`)
})
router.get('/delete/:id/:menu', async (req, res) => {
  let _id = req.params.id
  let menu = req.params.menu
  await Gallery.findByIdAndDelete(
    _id
  )
  res.redirect(`/admin/gallery/photos/${menu}`)
})
router.get('/menu/delete/:id', async (req, res) => {
  let _id = req.params.id
  await GalleryMenu.findByIdAndDelete(
    _id
  )
  res.redirect(`/admin/gallery`)
})
router.get('/submenu/delete/:id/:menu', async (req, res) => {
  let _id = req.params.id
  let menu = req.params.menu
  await GallerySubMenu.findByIdAndDelete(
    _id
  )
  res.redirect(`/admin/gallery/photos/${menu}`)
})
module.exports = router