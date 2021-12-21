const  express =  require('express')
const routes = express.Router()
const  usercontroller = require('../controllers/usercontroller.js')
const database = require('../db/database.js')

routes.post('/subscribers', usercontroller.signup)
routes.post('/subs', usercontroller.createEmail)
routes.get('/',(req,res)=> res.json({message:"all good"}))
routes.get('/email',usercontroller.verifyEmail)
module.exports =  routes