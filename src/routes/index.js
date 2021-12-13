const  express =  require('express')
const routes = express.Router()
const  usercontroller = require('../controllers/usercontroller.js')

routes.post('/subscribers', usercontroller.signup)
routes.post('/subs', usercontroller.createEmail)
routes.get('/sub', usercontroller.confirmIdSub)
routes.get('/',(req,res)=> res.json({message:"all good"}))
module.exports =  routes