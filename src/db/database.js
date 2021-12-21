const Subscribers = require('../db/models/subscribers')
module.exports ={
   
   async create(name, email, city) {
      

    try {
       const result =  await  Subscribers.create({
        name:name,
        email:email,
        city:city
      })
      return result
    } catch (error) {
      return error
      
    } 
    },
    async read(email){
      try {
          const result = await Subscribers.findAll({
            where :{
              email:email
            }
          })
          return result
      } catch (error) {
         return  error
      }
    }
    
}



