const  express =  require('express')
const routes = express.Router()
const  usercontroller = require('../controllers/usercontroller.js')

routes.post('/subscribers', usercontroller.signup)
routes.post('subs')
module.exports =  routes