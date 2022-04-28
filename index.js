const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const session = require('express-session')
const csrf = require('csurf')
const MongoStore = require('connect-mongodb-session')(session)
const flash = require('connect-flash') // !
const helmet = require('helmet')
const compression = require('compression')
// Routerlar
const routers = require('./routers')

// middleWare lar
const varMid = require('./middleware/var')
const fileMiddleware = require('./middleware/file')
const keys = require('./keys/pro')

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'admin',
    extname: 'hbs'
})


app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static(__dirname + '/public'))
app.use('/media', express.static('media')) // !

const store = new MongoStore({
    collection: 'session',
    uri: keys.MONGODB_URI
})
app.use(session({
    secret: keys.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        // maxAge: 60 * 60 * 60
        maxAge: 60 * 60 * 60 * 10
    },
    store
}))

app.use(fileMiddleware.single('img'))
app.use(csrf())
app.use(flash()) // !
app.use(varMid)
app.use(helmet())
app.use(compression())

app.use(routers)

// app.all('*', (req, res) => {
//     res.redirect("/");
// });

async function dev() {
    try {
        await mongoose.connect(keys.MONGODB_URI, {
            useNewUrlParser: true
        })
        // app.listen(process.env.PORT,()=>{
        //     console.log('Server is running')
        // })
        app.listen('3000', () => {
            console.log('Server is running')
        })
    } catch (error) {
        console.log(error)
    }
}
dev()