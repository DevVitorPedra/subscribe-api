const { create } = require('../db/database.js')

const mailer = require('../email/nodemailer.js')

module.exports = {
    async signup(req, res) {
        const { name, email, city } = req.query

        try {
            if (!name || !email || !city) throw new Error(`Preencha todos os campos`)
            const newSubscriber = await create(name,email,city)
            res.status(201).json({ message: newSubscriber })
        } catch (error) {
            return res.status(404).send({ message: `Erro no controller: ${error.message}` })
        }
    },
    async createEmail(req, res) {
        const { name, email, city } = req.query
        try {
            if (!name || !email || !city) throw new Error('Campos inválidos')
            const link = `tb-subscribe.netlify.app/sub?name=${name}&email=${email}&city=${city}`
            const mail = await mailer(name, email, link)
            res.status(201).send(mail)
        } catch (error) {
            res.status(404).send({ message: `${error.message}` })
        }
    },
    async confirmIdSub(req, res) {
        const { name,email, city  } = req.query
        try {
            const subCreate = create(name,email,city)
            return res.json({message:{'Subscription':subCreate}})
        } catch (error) {
            res.status(404).send({ message: 'something wrong is not right!' })
        }
    }
  
}