const {
  Router
} = require('express')
const router = Router()
const Video = require('../modeles/video')


router.get('/',async (req, res) => {
  let video = await Video.find().lean()
  res.render('admin/video', {
      title: 'Video',
      layout: "admin",
      isAdminVideo: true, video
  })
})

router.post('/', async (req, res) => {
  const { url,title } = req.body
  const video = await new Video({url,title})
  await video.save()
  res.redirect(`/admin/video`)
})

router.get('/delete/:id', async (req, res) => {
  let _id = req.params.id
  await Video.findByIdAndDelete(_id)
  res.redirect(`/admin/video`)
})


module.exports = router