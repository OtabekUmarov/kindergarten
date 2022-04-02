const {Router} = require('express')
const router = Router()


router.use('/', require('./router/page'))
router.use('/admin/auth', require('./router/auth'))

module.exports = router
