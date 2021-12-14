const  express = require('express')
const  cors = require('cors')
require('dotenv').config()
const  routes = require('./routes/index.js')
const port = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(port,()=> console.log(`Rodando na ${port}`))

