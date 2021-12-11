const { createsubs } = require('../db/database.js')
const  pool = require('../db/database.js')
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

    }
}