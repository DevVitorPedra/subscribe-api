const { create } = require('../db/database.js')

const mailer = require('../email/nodemailer.js')

module.exports = {
    async signup(req, res) {
        const { name, email, phone, city } = req.query

        try {
            if (!name || !email || !phone || !city) throw new Error(`Preencha todos os campos`)
            const newSubscriber = await create(req,res)
            res.status(201).json({ message: newSubscriber })
        } catch (error) {
            return res.status(404).send({ message: `Erro no controller: ${error}` })
        }
    },
    async createEmail(req, res) {
        const { name, email, city, phone } = req.query
        try {
            if (!name || !email || !city || !phone) throw new Error('Campos inválidos')
            const link = `tb-subscribe.netlify.app/sub?name=${name}&email=${email}&phone=${phone}&city=${city}`
            const mail = await mailer(name, email, link)
            res.status(201).send(mail)
        } catch (error) {
            res.status(404).send({ message: `${error}` })
        }
    },
    async confirmIdSub(req, res) {
        const { damn  } = req.query
        console.log(damn)
        try {
            res.json({ message: `all good` })
        } catch (error) {
            res.status(404).send({ message: 'something wrong is not right!' })
        }
    }
  
}