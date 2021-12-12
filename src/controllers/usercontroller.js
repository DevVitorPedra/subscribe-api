const { createsubs } = require('../db/database.js')
const crypto = require('crypto')
const mailer = require('../email/nodemailer.js')

module.exports= {
    async signup(req,res){
        const { name, email, password, created_on } = req.query
      
        try {   
            if(!name || !email || !password || !created_on) throw new Error(`Preencha todos os campos`)
            const newSubscriber = await createsubs(name,email,password,created_on)  
            res.status(201).json({message:newSubscriber})
        } catch (error) {  
                return res.status(404).send({message:`Erro no controller: ${error}`})
        }
    },
    async createEmail(req,res){
        const { name, email } = req.query
        try {
            if(!name || !email) throw new Error('Campos inválidos')
            
            const encryptedParams = crypto.createHash('sha256').update(name+email).digest('hex')
            const link = `www.youtube.com`
            const mail = await mailer(name,email, link)
            res.status(201).send({message:`Bem vindo, ${name}`})
        } catch (error) {
            res.status(404).send({message:`Algo errado não deu certo${error}`})
        }
    },
    async getTest(req,res){
        try {
            res.json({message:`all good`})
        } catch (error) {
            res.status(404).send({message:'something wrong is not right!'})
        }
    }
}