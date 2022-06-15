const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const session = require('express-session')
const csrf = require('csurf')
const MongoStore = require('connect-mongodb-session')(session)
const flash = require('connect-flash') // !
// Routerlar
const routers = require('./routers')

// middleWare lar
const varMid = require('./middleware/var')
const fileMiddleware = require('./middleware/file')
const keys = require('./keys/pro')

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'admin',
    extname: '.hbs'
})


app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.urlencoded({
    extended: true
}))
// app.use(express.static(__dirname + '/public'))
app.use(express.static('public'))
app.use('/media', express.static('media')) // !

const MONGODB_URI = 'mongodb://127.0.0.1:27017/kindergarder'

const store = new MongoStore({
    collection: 'session',
    uri: MONGODB_URI
})
// secret: keys.SESSION_SECRET,
app.use(session({
    secret: 'saasasa asasass safgghthyy',
    saveUninitialized: false,
    resave: true,
    cookie: {
        // maxAge: 60 * 60 * 60
        maxAge: 500 * 60 * 60 * 10
    },
    store
}))

app.use(fileMiddleware.single('img'))
app.use(csrf())
app.use(flash()) // !
app.use(varMid)

app.use(routers)

// app.all('*', (req, res) => {
//     res.redirect("/");
// });
// let PORT = process.env.PORT || 3000
let PORT =  3004
async function dev() {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true
        })
        app.listen(PORT,()=>{
            console.log(`Server is running ${PORT}`)
        })
        // app.listen('3000', () => {
        //     console.log('Server is running')
        // })
    } catch (error) {
        console.log(error)
    }
}
dev()