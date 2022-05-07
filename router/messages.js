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
router.get('/delete/:id/', async (req, res) => {
  let _id = req.params.id
  await Messages.findByIdAndDelete(
    _id
  )
  res.redirect(`/admin/messages`)
})

router.get('/edit/:id/', async (req, res) => {
  let _id = req.params.id
  let message = {status: true}
  await Messages.findByIdAndUpdate({_id},message)
  res.redirect(`/admin/messages`)
})



module.exports = router