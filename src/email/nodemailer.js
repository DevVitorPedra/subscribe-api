
const nodemailer = require('nodemailer')
const SMTP_Config = require('./smtp')


    let transporter =  nodemailer.createTransport({
        host:SMTP_Config.host,
        port:SMTP_Config.port,
        secure:false,
        auth:{
            user:SMTP_Config.user,
            pass:SMTP_Config.pass
        },
        tls:{
            rejectUnauthorized:false
        }
    })

    async function mailer(name,email, link){
    let mailSent = await transporter.sendMail({
        from:`Vitor Pedra <${process.env.EMAIL}>`,
        to:[`${email}`],
        subject:"Top Barber Subscription",
        text:"",
        html:`<strong>Olá, ${name}, gostaria de dar as boas vindas ao Top Barber<br></br>
        para concluir seu cadatro utilize este <a href=${link} target="_blank">Link</a> <br></br>
         espero que tenha uma ótima experiencia<br></br>
         qualquer dúvida ou sugestão, pode nos enviar um email para este mesmo endereço<br></br>
         Att,<br></br>
         Vitor dos Santos Pedra 
        `        
    })
    return mailSent
}


module.exports = mailer