const  express =  require('express')
const routes = express.Router()
const  usercontroller = require('../controllers/usercontroller.js')
const User = require('../db/firebase.js')
const mailer = require('../email/nodemailer.js')
routes.post('/subscribers', usercontroller.signup)
routes.post('/subs', usercontroller.createEmail)
routes.get('/sub/:id', usercontroller.confirmIdSub)
routes.post('/create', async(req,res)=>{
    const data = req.body
    await User.add(data)
    res.send({msg})
})
module.exports =  routes