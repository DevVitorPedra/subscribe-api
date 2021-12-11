const  express =  require('express')
const routes = express.Router()
const  usercontroller = require('../controllers/usercontroller.js')
const mailer = require('../email/nodemailer.js')
routes.post('/subscribers', usercontroller.signup)
routes.post('/subs',usercontroller.createEmail)
routes.get('/',usercontroller.getTest)
module.exports =  routes