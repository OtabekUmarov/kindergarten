const {
  Router
} = require('express')
const router = Router()

const Classes = require('../modeles/classes')
const Seat = require('../modeles/seat')


router.get('/',async (req, res) => {
  let classes = await Classes.find().lean()
  res.render('admin/class', {
      title: 'Sinflar',
      layout: "admin",
      success: req.flash('success'),
      error: req.flash('error'),
      isAdminClass: true, classes
  })
})
router.get('/seat',async (req, res) => {
  let seat = await Seat.find().populate('classId').lean()
  res.render('admin/class/seat', {
      title: 'Arizalar',
      layout: "admin",
      isAdminClassSeat: true, seat
  })
})

router.post('/', async (req, res) => {
    
  const { title, text, age, total, time, money } = req.body
  let img = req.file.path
  const classes = await new Classes({title, text, age, total, time, money, img})
  await classes.save()
  res.redirect('/admin/class')
})

router.get('/delete/:id/', async (req, res) => {
  let _id = req.params.id
  await Classes.findByIdAndDelete(
    _id
  )
  res.redirect(`/admin/class`)
})

router.get('/seat/delete/:id/', async (req, res) => {
  let _id = req.params.id
  await Seat.findByIdAndDelete(
    _id
  )
  res.redirect(`/admin/class/seat`)
})
module.exports = router