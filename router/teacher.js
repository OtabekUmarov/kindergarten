const {
  Router
} = require('express')
const router = Router()

const Classes = require('../modeles/classes')
const Teacher = require('../modeles/teacher')
const Seat = require('../modeles/seat')


router.get('/',async (req, res) => {
  let teachers = await Teacher.find().lean()
  res.render('admin/teacher', {
      title: 'O\'qituvchilar',
      layout: "admin",
      success: req.flash('success'),
      error: req.flash('error'),
      isAdminTeacher: true, teachers
  })
})


router.post('/', async (req, res) => {
    
  const { fullname, type, phone, telegram } = req.body
  let img = req.file && req.file.path
  const teacher = await new Teacher({fullname, type, phone, telegram, img})
  await teacher.save()
  res.redirect('/admin/teacher')
})

router.get('/delete/:id/', async (req, res) => {
  let _id = req.params.id
  await Teacher.findByIdAndDelete(
    _id
  )
  res.redirect(`/admin/teacher`)
})


module.exports = router