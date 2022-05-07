const {
    Router
} = require('express')
const router = Router()
const auth = require('../middleware/auth')
const Gallery = require('../modeles/gallery')
const GalleryMenu = require('../modeles/gallerymenu')
const GallerySubMenu = require('../modeles/gallerysubmenu')
const Message = require('../modeles/message')
const Classes = require('../modeles/classes')
const Teacher = require('../modeles/teacher')
const Seat = require('../modeles/seat')





router.get('/', async (req, res) => {
    let menu = await GalleryMenu.find().lean()
    let teacher = await Teacher.find().lean()
    let messages = await Message.find({status:true}).lean()
    messages = messages.map(message => {
        return{
            ...message,
            createdAt: message.createdAt.toLocaleString(),
        } 
    })
    res.render('index', {
        title: 'Home',
        layout: "site",
        success: req.flash('success'),
        error: req.flash('error'),
        isHome: true, menu, teacher, messages
    })
})

router.get('/about',async (req, res) => {
    let menu = await GalleryMenu.find().lean()
    let teacher = await Teacher.find().lean()
    res.render('about', {
        title: 'About',
        layout: "site",
        isAbout: true, menu, teacher
    })
})

router.get('/class', async(req, res) => {
    let menu = await GalleryMenu.find().lean()
    let classes = await Classes.find().lean()
    res.render('class', {
        title: 'Classes',
        layout: "site",
        isClass: true,menu,classes
    })
})

router.get('/team', async (req, res) => {
    let menu = await GalleryMenu.find().lean()
    let teacher = await Teacher.find().lean()
    let messages = await Message.find({status:true}).lean()
    messages = messages.map(message => {
        return{
            ...message,
            createdAt: message.createdAt.toLocaleString(),
        }
    })
    res.render('team', {
        title: 'Teachers',
        layout: "site",
        isTeam: true,menu,teacher,messages
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
router.get('/contact', async(req, res) => {
    let menu = await GalleryMenu.find().lean()
    res.render('contact', {
        title: 'Contact',
        layout: "site",
        isContact: true,menu
    })
})
router.get('/admin', auth,(req, res) => {
    res.render('admin', {
        title: 'Dashboard',
        layout: "admin",
        isAdmin: true
    })
})


router.post('/messages', async (req, res) => {
    
    const { fullname,email,phone,message } = req.body
    const messages = await new Message({fullname,email,phone,message})
    await messages.save()
    res.redirect('/contact')
  })
router.post('/class/seat', async (req, res) => {
    const { fullname,phone,classId } = req.body
    const seat = await new Seat({fullname,phone,classId})
    await seat.save()
    res.redirect('/class')
  })

module.exports = router