const {
    Router
} = require('express')
const router = Router()
const auth = require('../middleware/auth')
const Gallery = require('../modeles/gallery')




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

router.get('/team', (req, res) => {
    res.render('team', {
        title: 'Teachers',
        layout: "site",
        isTeam: true
    })
})
router.get('/gallery',async (req, res) => {
    let gallery = await Gallery.find().lean()
    res.render('gallery', {
        title: 'Gallery',
        layout: "site",
        isGallery: true,
        gallery
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





module.exports = router