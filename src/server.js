const  express = require('express')
const  cors = require('cors')
const  routes = require('./routes/index.js')
const PORT = 3333
const app = express()
const mailer = require('./email/nodemailer')

app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(PORT,()=> console.log(`Rodando na ${PORT}`))

