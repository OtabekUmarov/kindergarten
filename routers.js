const {Router} = require('express')
const router = Router()


router.use('/', require('./router/page'))

module.exports = router