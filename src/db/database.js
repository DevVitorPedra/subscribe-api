const Subscribers = require('../db/models/subscribers')
module.exports ={
   
   async create(req, res, next) {
      const { name, email, phone, city} = req.query
      Subscribers.create({
        name,
        email,
        phone,
        city
      })
        .then((result) => {
          res.status(201).json(result); //return with ID -> 201 (CREATED)
        })
        .catch(next);
    },
    
}



