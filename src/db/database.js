const Subscribers = require('../db/models/subscribers')
module.exports ={
   
   async create(name, email, phone, city) {
      

    try {
       const result =  await  Subscribers.create({
        name:name,
        email:email,
        phone:phone,
        city:city
      })
      return result
    } catch (error) {
      return error
      
    } 
    },
    
}



