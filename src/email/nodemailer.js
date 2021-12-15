
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

    async function mailer(name, email, link){
    let mailSent = await transporter.sendMail({
        from:`Vitor Pedra <${process.env.EMAIL}>`,
        to:[`${email}`],
        subject:"Muito Obrigado",
        text:"Obrigado",
        html:`<strong>Olá, ${name}, gostaria de agradecer todo apoio,<br></br>
        para concluir seu cadatro utilize este <a href=${link} target="_blank">Link</a> <br></br>
        ele será apagado em breve, pois este recurso é um caso de estudo<br></br>
         qualquer dúvida ou sugestão, pode nos enviar um email para este mesmo endereço<br></br>
         (que é um email de jogos que fiz pro meu sobrinho hahahahaha)<br></br>
         Att,<br></br>
         Vitor dos Santos Pedra 
        `        
    })
    return mailSent
}


module.exports = mailer