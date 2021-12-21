const { create, read } = require('../db/database.js')

const mailer = require('../email/nodemailer.js')
const { emailAlreadyExists } = require('../utils/functions.js')


module.exports = {
    async signup(req, res) {
        const { name, email, city } = req.query

        try {
            if (!name || !email || !city) throw new Error(`Preencha todos os campos`)
            const newSubscriber = await create(name,email,city)
            res.status(201).json({"Dados":(newSubscriber.hasOwnProperty("errors"))?"Email Já cadastrado":"Seu cadastro foi concluído com sucesso" })
        } catch (error) {
            return res.status(404).send({ message: `Erro no controller: ${error.message}` })
        }
    },
    async createEmail(req, res) {
        const { name, email, city } = req.query
        try {
            const emailexists = await emailAlreadyExists(email)
            console.log(JSON.stringify(emailexists))
            if(emailexists[0]) throw new Error("Email já cadastrado!")
            if (!name || !email || !city) throw new Error('Campos inválidos')
            const link = `https://topbarbersubscribers.herokuapp.com/sub?name=${name}&email=${email}&city=${city}`
            const mail = await mailer(name, email, link)
            res.status(201).send({message:"Cadastro feito com sucesso "})
        } catch (error) {
            res.status(404).send({ message: `${error.message}` })
        }
    },
    async confirmIdSub(req, res) {
        const { name,email, city  } = req.query
        try {
            const subCreate = await create(name,email,city)
            return res.json({'Subscription':(subCreate.hasOwnProperty("errors"))?"Email Já cadastrado":"Seu cadastro foi concluído com sucesso"})
        } catch (error) {
            res.status(404).send({ message: 'something wrong is not right!' })
        }
    },
    async verifyEmail(req, res) {
        try {
        const {email} = req.query
        const result = await read(email)
        res.status(200).send({message:result})
        } catch (error) {
                res.status(404).send({message:error})
        }
      
    }
  
}