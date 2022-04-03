const {
  Router
} = require('express')
const router = Router()

const User = require('../modeles/user')


router.get('/',async (req, res) => {
  let users = await User.find().lean()
  res.render('admin/users', {
      title: 'Foydalanuvchilar',
      layout: "admin",
      success: req.flash('success'),
      error: req.flash('error'),
      isUsers: true, 
      users
  })
})


module.exports = router