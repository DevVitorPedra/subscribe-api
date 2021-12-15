const Subscribers = require('../db/models/subscribers')
module.exports ={
   
   async create(req, res, next) {
      const { name, email, phone, city} = req.query
      Subscribers.create({
        name:name,
        email:email,
        phone:phone,
        city:city
      })
        .then((result) => {
          res.status(201).send({message:result}); //return with ID -> 201 (CREATED)
        })
        .catch(next);
    },
    
}



