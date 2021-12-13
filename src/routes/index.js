const  express =  require('express')
const routes = express.Router()
const  usercontroller = require('../controllers/usercontroller.js')
const User = require('../db/firebase.js')
const mailer = require('../email/nodemailer.js')
routes.post('/subscribers', usercontroller.signup)
routes.post('/subs', usercontroller.createEmail)
routes.get('/sub/:id', usercontroller.confirmIdSub)

module.exports =  routes