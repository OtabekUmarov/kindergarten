// module.exports = {
//     MONGODB_URI: process.env.MONGODB_URI,
//     SESSION_SECRET: process.env.SESSION_SECRET,
//     SYSTEM_EMAIL: process.env.SYSTEM_EMAIL,
//     PASSWORD_EMAIL: process.env.PASSWORD_EMAIL
// }

// mongodb
// alijon.abdurasulov@bk.ru
// Alikhan0606    HbH6tX8D0rZUyb2Y

// heroku Ali.1902525 

// module.exports = {
//     BASE_URL: 'localhost',
//     MONGODB_URI: 'mongodb://127.0.0.1:27017/kindergarden',
//     SESSION_SECRET: 'some secret key',
//     SYSTEM_EMAIL: 'umarovotabek0220@gmail.com',
//     PASSWORD_EMAIL: 'Otabek1999#'
// }

module.exports = {
    // MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://Zyn1e:a2z0i0z2@cluster0.ovlub.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://alikhan:HbH6tX8D0rZUyb2Y@cluster0.xrvyx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    SESSION_SECRET: process.env.SESSION_SECRET || 'some secret key',
    SYSTEM_EMAIL: process.env.SYSTEM_EMAIL || 'umarovotabek0220@gmail.com',
    PASSWORD_EMAIL: process.env.PASSWORD_EMAIL|| 'Otabek1999#'
}