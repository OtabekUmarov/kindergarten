const {
    Router
} = require('express')
const router = Router()
const auth = require('../middleware/auth')
const Gallery = require('../modeles/gallery')
const GalleryMenu = require('../modeles/gallerymenu')
const GallerySubMenu = require('../modeles/gallerysubmenu')
const Message = require('../modeles/message')





router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        layout: "site",
        success: req.flash('success'),
        error: req.flash('error'),
        isHome: true
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        layout: "site",
        isAbout: true
    })
})

router.get('/class', (req, res) => {
    res.render('class', {
        title: 'Classes',
        layout: "site",
        isClass: true
    })
})

router.get('/team', async (req, res) => {
    let menu = await GalleryMenu.find().lean()
    res.render('team', {
        title: 'Teachers',
        layout: "site",
        isTeam: true,menu
    })
})
router.get('/gallery/:id',async (req, res) => {
    let gallery = await Gallery.find({menu:req.params.id}).lean()
    let menu = await GalleryMenu.find().lean()
    let submenu = await GallerySubMenu.find({menuId:req.params.id}).lean()
    res.render('gallery', {
        title: 'Gallery',
        layout: "site",
        isGallery: true,
        gallery, menu,submenu
    })
})
router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact',
        layout: "site",
        isContact: true
    })
})
router.get('/admin', auth,(req, res) => {
    res.render('admin', {
        title: 'Contact',
        layout: "admin",
        isAdmin: true
    })
})


router.post('/contact/message', async (req, res) => {
    const { fullname,email,phone,message } = req.body
    const messages = await new Message({fullname,email,phone,message})
    await messages.save()
    res.redirect('/contact')
  })




module.exports = router