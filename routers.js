const {Router} = require('express')
const router = Router()
const auth = require('./middleware/auth')

router.use('/', require('./router/page'))
router.use('/admin/auth', require('./router/auth'))
router.use('/admin/users', auth, require('./router/users'))
router.use('/admin/gallery', auth, require('./router/gallery'))
router.use('/admin/messages', auth, require('./router/messages'))
router.use('/admin/class', auth, require('./router/class'))
router.use('/admin/teacher', auth, require('./router/teacher'))

module.exports = router
