const {
  Router
} = require('express')
const router = Router()

const Messages = require('../modeles/message')


router.get('/',async (req, res) => {
  let messages = await Messages.find().lean()
  res.render('admin/messages', {
      title: 'Xabarlar',
      layout: "admin",
      success: req.flash('success'),
      error: req.flash('error'),
      isAdminMessages: true, 
      messages
  })
})


module.exports = router